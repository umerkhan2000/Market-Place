import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ModelVerse
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The premier marketplace for high-quality 3D models. Buy, sell, and discover amazing 3D assets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Browse Models</Link></li>
              <li><Link to="/marketplace?category=characters" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Characters</Link></li>
              <li><Link to="/marketplace?category=environments" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Environments</Link></li>
              <li><Link to="/marketplace?category=props" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Props</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Creator Guide</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ModelVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
