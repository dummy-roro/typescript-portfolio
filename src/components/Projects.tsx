
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EKS-Terraform-GitHub-Actions",
      description: "Configuring Production-Ready EKS Clusters with Terraform and GitHub Actions.",
      tech: ["Terraform", "EKS", "GitHub Actions", "AWS"],
      github: "https://github.com/dummy-roro/EKS-Terraform-GitHub-Actions",
      stars: 45,
      forks: 12
    },
    {
      title: "EKS-ArgoCD-AWS-LB-Controller-Terraform", 
      description: "Terraform to bootstrap EKS with ArgoCD, Prometheus, Grafana, and AWS LB Controller.",
      tech: ["Terraform", "ArgoCD", "Prometheus", "Grafana"],
      github: "https://github.com/dummy-roro/EKS-ArgoCD-AWS-LB-Controller-Terraform",
      stars: 67,
      forks: 23
    },
    {
      title: "End-to-End-Kubernetes-Three-Tier-DevSecOps-Project",
      description: "Complete three-tier application deployment with comprehensive DevSecOps pipeline.",
      tech: ["Docker", "Kubernetes", "Jenkins", "AWS", "SonarQube"],
      github: "https://github.com/dummy-roro/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project",
      stars: 89,
      forks: 34
    },
    {
      title: "End-to-End-Kubernetes-DevSecOps-Tetris-Project",
      description: "DevSecOps implementation for Tetris game deployment on Kubernetes.",
      tech: ["Kubernetes", "DevSecOps", "Jenkins", "Docker"],
      github: "https://github.com/dummy-roro/End-to-End-Kubernetes-DevSecOps-Tetris-Project",
      stars: 56,
      forks: 18
    },
    {
      title: "Netflix-Clone-K8S-End-to-End-Project",
      description: "Netflix clone application with end-to-end Kubernetes deployment pipeline.",
      tech: ["Kubernetes", "React", "Node.js", "MongoDB"],
      github: "https://github.com/dummy-roro/Netflix-Clone-K8S-End-to-End-Project",
      stars: 78,
      forks: 29
    },
    {
      title: "MERN-Stack-Project",
      description: "Full-stack MERN application with modern DevOps practices and deployment.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/dummy-roro/MERN-Stack-Project",
      stars: 43,
      forks: 15
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-space-grotesk">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Production-ready cloud-native systems showcasing DevOps and DevSecOps best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors font-space-grotesk">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 font-inter leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-gray-800 text-cyan-400 border-gray-600 font-inter">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.github, '_blank')}
                  className="border-gray-600 text-white hover:bg-cyan-600 hover:border-cyan-400 font-inter"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 text-white hover:bg-cyan-600 hover:border-cyan-400 font-inter"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
