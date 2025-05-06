
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Hello,</span> I'm <span className="gradient-text">Daya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
          I'm a Software Developer passionate about crafting elegant solutions and building meaningful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <Link to={"/projects"}></Link>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-2 border-blue-400/30 hover:bg-blue-500/10 hover:border-blue-400/50">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-foreground/50 hover:text-blue-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
