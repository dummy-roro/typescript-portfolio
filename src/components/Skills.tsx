
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { 
          name: "AWS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          color: "bg-orange-500" 
        },
        { 
          name: "Azure", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
          color: "bg-blue-600" 
        },
        { 
          name: "Google Cloud", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          color: "bg-green-500" 
        }
      ]
    },
    {
      title: "Container & Orchestration", 
      skills: [
        { 
          name: "Kubernetes", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          color: "bg-blue-500" 
        },
        { 
          name: "Docker", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          color: "bg-blue-600" 
        },
        { 
          name: "Helm", 
          logo: "https://helm.sh/img/helm.svg",
          color: "bg-indigo-500" 
        }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { 
          name: "Terraform", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
          color: "bg-purple-600" 
        },
        { 
          name: "Ansible", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
          color: "bg-red-500" 
        },
        { 
          name: "CloudFormation", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          color: "bg-yellow-600" 
        }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { 
          name: "GitHub Actions", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          color: "bg-gray-800" 
        },
        { 
          name: "Jenkins", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
          color: "bg-blue-700" 
        },
        { 
          name: "GitLab CI", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          color: "bg-orange-600" 
        }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { 
          name: "Prometheus", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
          color: "bg-red-600" 
        },
        { 
          name: "Grafana", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
          color: "bg-orange-500" 
        },
        { 
          name: "ELK Stack", 
          logo: "https://www.elastic.co/static-res/images/elastic-logo-200.png",
          color: "bg-yellow-500" 
        }
      ]
    },
    {
      title: "Security & Compliance",
      skills: [
        { 
          name: "SonarQube", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
          color: "bg-blue-500" 
        },
        { 
          name: "Trivy", 
          logo: "https://aquasecurity.github.io/trivy/latest/imgs/logo.png",
          color: "bg-green-600" 
        },
        { 
          name: "OWASP ZAP", 
          logo: "https://www.zaproxy.org/docs/desktop/ui/images/zap64x64.png",
          color: "bg-purple-500" 
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable, and secure cloud-native solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-500">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center group cursor-pointer">
                    <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                      <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center shadow-lg border border-gray-200">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="h-8 w-8 object-contain"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = "https://via.placeholder.com/32x32/666666/ffffff?text=" + skill.name.charAt(0);
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
