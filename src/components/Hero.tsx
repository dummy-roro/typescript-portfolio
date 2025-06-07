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
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 animate-fade-in">
          {/* Terminal Box */}
          <div className="p-6 bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700 font-mono text-left max-w-lg w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3
