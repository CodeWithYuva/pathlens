from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from config import Config
from model import db, bcrypt, User


app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
bcrypt.init_app(app)
jwt = JWTManager(app)
mail = Mail(app)
serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

@app.route('/')
def index():
    return jsonify({'msg': 'Welcome to the PathLens API!'})

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'msg': 'Email already exists'}), 400

    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()

    token = serializer.dumps(user.email, salt='email-confirm')
    link = f"http://localhost:5000/verify/{token}"
    msg = Message("Verify Email", recipients=[user.email])
    msg.body = f"Click to verify your account: {link}"
    #mail.send(msg)

    return jsonify({'msg': 'Registered! Check your email to verify.'})


@app.route('/verify/<token>')
def verify(token):
    try:
        email = serializer.loads(token, salt='email-confirm', max_age=3600)
        user = User.query.filter_by(email=email).first()
        if user:
            user.verified = True
            db.session.commit()
            return jsonify({'msg': 'Email verified successfully!'})
        return jsonify({'msg': 'User not found'}), 404
    except:
        return jsonify({'msg': 'Invalid or expired token'}), 400


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['password']):
        if False :#not user.verified:
            return jsonify({'msg': 'Verify your email first'}), 403
        token = create_access_token(identity=user.id)
        return jsonify({'token': token})
    return jsonify({'msg': 'Invalid credentials'}), 401


@app.route('/profile', methods=['GET', 'PUT', 'DELETE'])
@jwt_required()
def profile():
    user = User.query.get(get_jwt_identity())
    if request.method == 'GET':
        return jsonify({'username': user.username, 'email': user.email})
    elif request.method == 'PUT':
        data = request.get_json()
        user.username = data.get('username', user.username)
        db.session.commit()
        return jsonify({'msg': 'Profile updated'})
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'msg': 'Account deleted'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
