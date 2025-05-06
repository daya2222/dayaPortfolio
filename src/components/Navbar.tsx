
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    toast({
      title: "Resume",
      description: "Resume download coming soon!",
    });
  };

  const NavItems = () => (
    <>
      <a 
        href="#about" 
        className="text-foreground hover:text-blue-400 transition-colors px-4 py-2 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      >
        About
      </a>
      <a 
        href="#projects" 
        className="text-foreground hover:text-blue-400 transition-colors px-4 py-2 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      >
        Projects
      </a>
      <a 
        href="#contact" 
        className="text-foreground hover:text-blue-400 transition-colors px-4 py-2 relative after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
      >
        Contact
      </a>
      <Button onClick={handleResumeClick} variant="outline" className="rounded-full border-2 border-blue-400/30 hover:bg-blue-400 hover:text-background transition-colors">
        Resume
      </Button>
    </>
  );

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-sm shadow-md shadow-blue-500/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavItems />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground rounded-full w-10 h-10 flex items-center justify-center bg-white/90 shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-md py-6 px-4 flex flex-col gap-6 items-center animate-fade-in">
          <NavItems />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
