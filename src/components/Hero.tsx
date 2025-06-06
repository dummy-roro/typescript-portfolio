
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "DevOps Engineer",
    "DevSecOps Enthusiast", 
    "Cloud Native Specialist",
    "Kubernetes Expert"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCurrentIndex(0);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentTextIndex, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-green-900/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block p-6 bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700 font-mono text-left max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-green-400">
              <span className="text-blue-400">$</span> whoami
            </div>
            <div className="text-white mt-2">Dummy Robot</div>
            <div className="text-green-400 mt-4">
              <span className="text-blue-400">$</span> cat role.txt
            </div>
            <div className="text-white mt-2 min-h-[1.5rem]">
              {text}<span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Dummy Robot
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
          Building production-ready cloud-native systems with automation, CI/CD, and secure Kubernetes environments
        </p>
        
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
