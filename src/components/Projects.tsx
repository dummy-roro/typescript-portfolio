
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: number;
  forks?: number;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      name: "EKS-Terraform-GitHub-Actions",
      description: "Configuring Production-Ready EKS Clusters with Terraform and GitHub Actions and Jenkins.",
      tags: ["terraform", "eks", "github-actions", "aws", "jenkins"],
      githubUrl: "https://github.com/dummy-roro/EKS-Terraform-GitHub-Actions"
    },
    {
      name: "Tic-Tac-Toe App",
      description: "Tic Tac Toe game deployment with DevSecOps practices using GitOps.",
      tags: ["eks", "argocd", "sonarqube", "trivy", "nodejs"],
      githubUrl: "https://github.com/dummy-roro/nodejs-tic-tac-toe"
    },
    {
      name: "Solar-System App",
      description: "Complete application deployment with Full DevSecOps practices on Kubernetes.",
      tags: ["docker", "kubernetes", "jenkins",,"aws", "sonarqube","argocd"],
      githubUrl: "https://github.com/dummy-roro/solar-system"
    },
    {
      name: "Shorten-URL-App",
      description: "URL shortener application with CI/CD pipeline and security scanning.",
      tags: ["kubernetes", "devsecops", "golang", "docker", "github-actions"],
      githubUrl: "https://github.com/dummy-roro/golang-shorten-url"
    },
    {
      name: "Portfolio Project with DevsecOps ",
      description: "My personal portfolio showcasing DevOps projects and skills.",
      tags: ["react", "tailwindcss", "typescript", "vite"],
      githubUrl: "https://github.com/dummy-roro/typescript-portfolio"
    },
    {
      name: "Three-tier Java Spring Boot App",
      description: "Java Spring Boot application with CI/CD pipeline and security practices.",
      tags: ["java", "spring-boot", "jenkins", "docker", "kubernetes","mongodb"],
      githubUrl: "https://github.com/dummy-roro/"
    }
  ]);

  // Mock GitHub stats (in production, you'd fetch from GitHub API)
  useEffect(() => {
    // Simulate API call to get stars/forks
    // In production: fetch from https://api.github.com/repos/dummy-roro/repo-name
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my DevOps and DevSecOps projects, demonstrating expertise in cloud-native technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
                    {project.name}
                  </CardTitle>
                  <div className="flex gap-2 text-sm text-gray-500">
                    {project.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </div>
                    )}
                  </div>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
