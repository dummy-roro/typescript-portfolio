
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20 dark:from-blue-900/40 dark:via-cyan-900/40 dark:to-indigo-900/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Terminal and Name */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-block p-6 bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700 font-mono text-left w-full max-w-lg">
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
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mt-8 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                Dummy Robot
              </span>
            </h1>
          </div>
          
          {/* Right Side - Description and Buttons */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Building production-ready cloud-native systems with automation, CI/CD, and secure Kubernetes environments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
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
