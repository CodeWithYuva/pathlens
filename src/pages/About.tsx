import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';


// Reusable Card Component
const FeatureCard = ({ title, description, className = "" }) => {
  return (
    <div className={`bg-gray-100 rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group ${className}`}>
      <div className="w-4 h-4 bg-black rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
      <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
};

// Reusable Input Component
const FormInput = ({ label, type = "text", placeholder, value, onChange }) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
        />
      ) : (
        <input
          type={type}
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Message sent:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const whyPathLensFeatures = [
    {
      title: "AI Career Guidance",
      description: "Get personalized career suggestions based on your unique strengths and interests."
    },
    {
      title: "Personalized Roadmaps",
      description: "Follow detailed learning plans and track your progress with data."
    },
    {
      title: "Mentor-Like Support",
      description: "Get actionable insights and encouragement at every step."
    }
  ];

  const ourValuesFeatures = [
    {
      title: "Clarity",
      description: "We simplify complex career decisions with clear, actionable insights."
    },
    {
      title: "Inclusivity",
      description: "PathLens is designed for all backgrounds and learning styles."
    },
    {
      title: "Privacy First",
      description: "Your data is secure and never shared without your consent."
    }
  ];
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <Spline scene="https://prod.spline.design/WQefUMAul1WPo1p6/scene.splinecode" />
      </div>
      {/* Navigation Bar (Same as Index.tsx) */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">PathLens</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/')}>Dashboard</Button>
            <Button variant="ghost" onClick={() => navigate('/swot-input')}>SWOT Input</Button>
            <Button variant="ghost" onClick={() => navigate('/results')}>AI Analysis</Button>
            <Button variant="ghost" onClick={() => navigate('/roadmap')}>Roadmap</Button>
            <Button variant="outline" onClick={() => navigate('/login.html')}>Login</Button>
            <Button onClick={() => navigate('/signup.html')}>Get Started</Button>
          </div>
        </div>
      </nav>



      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* About PathLens Section */}
        <section className="mb-16 font-poppins">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6">About PathLens</h1>
            <p className="text-lg text-gray-900 leading-relaxed">
              PathLens is your AI-powered career guide. Our mission is to empower students and professionals
              by providing intelligent, data-driven insights into their career journey. Whether you're exploring
              options, identifying skill gaps, or tracking progress—PathLens offers a personalized experience.
            </p>
          </div>
          <br /><br /><br />


          {/* Why PathLens */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Why PathLens?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {whyPathLensFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  className="transform hover:scale-105 hover:shadow-lg"
                />
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ourValuesFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  className="transform hover:scale-105 hover:shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600">
              We'd love to hear from you. Reach out with questions, feedback, or partnership ideas.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h3>

              <div className="space-y-4">
                <FormInput
                  label="Your Name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                />

                <FormInput
                  label="Message"
                  type="textarea"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                />

                <button
                  onClick={handleSubmit}
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="text-center text-gray-900 text-sm">
              <p>Or reach us at: <a href="mailto:support@pathlens.ai" className="text-blue-600 hover:underline">support@pathlens.ai</a></p>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="bg-muted/100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">PathLens</span>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered career guidance to help you discover and achieve your professional goals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 PathLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;