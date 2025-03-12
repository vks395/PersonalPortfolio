import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-white font-heading font-bold text-2xl">
                Vicky Kumar Sharma
              </a>
              <p className="mt-2 text-slate-400">Software Engineer .NET</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a 
                href="#home" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience
              </a>
              <a 
                href="#education" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Education
              </a>
              <a 
                href="#contact" 
                className="text-slate-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Vicky Kumar Sharma. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
