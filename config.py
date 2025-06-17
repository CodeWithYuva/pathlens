class Config:
    SECRET_KEY = 'pathlenscrectkey'
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:Yuva15@localhost:5500/pathlens'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'your_email@gmail.com'
    MAIL_PASSWORD = 'your_app_password'
    MAIL_DEFAULT_SENDER = 'your_email@gmail.com'
