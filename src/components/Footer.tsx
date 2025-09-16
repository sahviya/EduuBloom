import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-dark/10 to-cyan-blue/10 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EduBloom
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The classroom that knows you. Personalized AI-powered learning for everyone.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Courses</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">About</a></li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Data Structures</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Python Programming</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-teal-light transition-colors">Web Development</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gradient-leaf rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Github className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-brain rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gradient-leaf rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              support@edubloom.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EduBloom. All rights reserved. Built with ❤️ for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};