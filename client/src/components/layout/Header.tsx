import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion as m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickNav = (href: string) => {
    setIsOpen(false);
    // Scroll to the section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="font-heading font-bold text-xl sm:text-2xl text-primary">
            Vicky K. Sharma
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-slate-700 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickNav(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <Button 
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <m.div 
            className="md:hidden bg-white border-t border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-3">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      className="block py-2 text-slate-700 hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickNav(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
