import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, BookOpen, Search, User, CircleUser, LayoutDashboard, ArrowUp } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import About from "./About";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Analysis",
      description: "Advanced NLP algorithms analyze your SWOT inputs to identify the best career matches for your unique profile."
    },
    {
      icon: BookOpen,
      title: "Personalized Roadmaps",
      description: "Get tailored learning paths and skill development recommendations based on your career goals and current abilities."
    },
    {
      icon: LayoutDashboard,
      title: "Progress Tracking",
      description: "Monitor your career development journey with detailed reports and real-time recommendations."
    }
  ];

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const steps = [
    {
      step: "01",
      title: "Complete Your SWOT",
      description: "Input your Strengths, Weaknesses, Opportunities, and Threats manually or upload your resume for automatic analysis."
    },
    {
      step: "02",
      title: "Get AI Insights",
      description: "Our intelligent algorithms analyze your profile and match you with suitable career domains and opportunities."
    },
    {
      step: "03",
      title: "Follow Your Roadmap",
      description: "Receive personalized learning paths, skill recommendations, and track your progress toward your career goals."
    }
  ];

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Spline scene="https://prod.spline.design/WQefUMAul1WPo1p6/scene.splinecode" />
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">PathLens AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => (window.location.href = 'swot-input')}>SWOT Input</Button>
            <Button variant="ghost" onClick={() => (window.location.href = 'results')}>AI Analysis</Button>
            <Button variant="ghost" onClick={() => (window.location.href = 'roadmap')}>Roadmap</Button>
            <Button variant="outline" onClick={() => window.location.href = '/login.html'}>Login</Button>
            <Button onClick={() => window.location.href = '/signup.html'}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b bg-muted/10"><br /><br />
        <h1 className="text-5xl md:text-6xl font-Merriweather mb-6 bg-gradient-to-r from-primary to-emerald-700 bg-clip-text text-transparent">
          Discover Your Perfect Career Path
        </h1>
        <p className="font-poppins text-xl text-gray-900 mb-8 max-w-2xl mx-auto leading-relaxed">
          AI-powered career guidance based on your SWOT analysis. Get personalized recommendations,
          skill gap analysis, and tailored learning roadmaps to accelerate your professional journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="px-8 py-6 text-lg" size="lg"
            className="px-8 py-6 text-lg"
            onClick={() => (window.location.href = '/swot-input')}>
            Start Your Free Analysis
          </Button>
          <Button size="lg" className="px-8 py-6 text-lg" size="lg"
            className="px-8 py-6 text-lg"
            onClick={() => (window.location.href = '/About')}>
            About Us
          </Button>
        </div>
        <div className="mt-12 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-gray-900 cursor-pointer"
            onClick={() => {
              const el = document.getElementById("how-it-works");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30" id="how-it-works">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-indigo mb-4">How PathLens Works</h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Three simple steps to unlock your career potential with AI-driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.step}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-300"></div>
              </Card>
            ))}
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-indigo mb-4">Powerful Features for Career Growth</h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Everything you need to make informed career decisions and accelerate your professional development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Resume Analysis</h3>
                  <p className="text-muted-foreground">Upload your resume and let our AI extract your strengths, skills, and experience automatically.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CircleUser className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Skill Gap Analysis</h3>
                  <p className="text-muted-foreground">Identify exactly what skills you need to develop to reach your career goals faster.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have discovered their ideal career path with PathLens.
            Start your personalized analysis today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg" size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => (window.location.href = '/swot-input')}>
              Start your Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">PathLens</span>
              </div>
              <p className="font-poppins mb-4 ">
                AI-powered career guidance to help you discover and achieve your professional goals.
              </p>

            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-gray-900 bg">
            <p>&copy; 2025 PathLens. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <div
          className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </div>
      )}

    </div>
  );
};

export default Index;
