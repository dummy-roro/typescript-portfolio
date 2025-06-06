
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
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
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
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'DummyRobot_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-inter ${
      darkMode 
        ? 'dark bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-black/80 border-gray-700' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl md:text-4xl font-bold font-space-grotesk bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Dummy Robot
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-lg font-medium font-inter">
              <a href="#about" className={`transition-colors ${
                darkMode 
                  ? 'text-white hover:text-cyan-400' 
                  : 'text-gray-900 hover:text-cyan-600'
              }`}>About</a>
              <a href="#projects" className={`transition-colors ${
                darkMode 
                  ? 'text-white hover:text-cyan-400' 
                  : 'text-gray-900 hover:text-cyan-600'
              }`}>Projects</a>
              <a href="#skills" className={`transition-colors ${
                darkMode 
                  ? 'text-white hover:text-cyan-400' 
                  : 'text-gray-900 hover:text-cyan-600'
              }`}>Skills</a>
              <a href="#contact" className={`transition-colors ${
                darkMode 
                  ? 'text-white hover:text-cyan-400' 
                  : 'text-gray-900 hover:text-cyan-600'
              }`}>Contact</a>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/dummy-roro', '_blank')}
                className={`transition-colors ${
                  darkMode 
                    ? 'text-white hover:text-cyan-400 hover:bg-gray-800' 
                    : 'text-gray-900 hover:text-cyan-600 hover:bg-gray-100'
                }`}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/dummy-roro', '_blank')}
                className={`transition-colors ${
                  darkMode 
                    ? 'text-white hover:text-cyan-400 hover:bg-gray-800' 
                    : 'text-gray-900 hover:text-cyan-600 hover:bg-gray-100'
                }`}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('mailto:dummyrobot.devops@gmail.com', '_blank')}
                className={`transition-colors ${
                  darkMode 
                    ? 'text-white hover:text-cyan-400 hover:bg-gray-800' 
                    : 'text-gray-900 hover:text-cyan-600 hover:bg-gray-100'
                }`}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeDownload}
                className={`hidden sm:flex font-inter ${
                  darkMode 
                    ? 'border-gray-600 text-white hover:bg-cyan-600 hover:border-cyan-400' 
                    : 'border-gray-300 text-gray-900 hover:bg-cyan-600 hover:text-white hover:border-cyan-400'
                }`}
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
