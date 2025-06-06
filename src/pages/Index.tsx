
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleResumeDownload = () => {
    // Create a mock resume download - in production, link to actual resume
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'DummyRobot_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-inter ${darkMode ? 'dark bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white' : 'bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl md:text-4xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Dummy Robot
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-lg font-medium">
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/dummy-roro', '_blank')}
                className="text-white hover:text-cyan-400 hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/dummy-roro', '_blank')}
                className="text-white hover:text-cyan-400 hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('mailto:dummyrobot.devops@gmail.com', '_blank')}
                className="text-white hover:text-cyan-400 hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeDownload}
                className="hidden sm:flex border-gray-600 text-white hover:bg-cyan-600 hover:border-cyan-400"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
