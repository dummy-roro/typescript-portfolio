
const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: "aws" },
        { name: "Azure", icon: "cloud" },
        { name: "Google Cloud", icon: "cloud" }
      ]
    },
    {
      title: "Container & Orchestration", 
      skills: [
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Docker", icon: "docker" },
        { name: "Helm", icon: "package" }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: "terraform" },
        { name: "Ansible", icon: "settings" },
        { name: "CloudFormation", icon: "layers" }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "GitHub Actions", icon: "github-actions" },
        { name: "Jenkins", icon: "jenkins" },
        { name: "GitLab CI", icon: "git-branch" }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: "activity" },
        { name: "Grafana", icon: "bar-chart" },
        { name: "ELK Stack", icon: "search" }
      ]
    },
    {
      title: "Security & Compliance",
      skills: [
        { name: "SonarQube", icon: "sonarqube" },
        { name: "Trivy", icon: "shield" },
        { name: "OWASP ZAP", icon: "lock" }
      ]
    }
  ];

  const getIconComponent = (iconName: string) => {
    const iconClasses = "h-8 w-8 mb-2 mx-auto";
    
    // For now, using simple colored divs as placeholders for the specific DevOps tool icons
    // In production, you'd use actual brand icons or SVGs
    const iconColors = {
      aws: "bg-orange-500",
      kubernetes: "bg-blue-500", 
      docker: "bg-blue-600",
      terraform: "bg-purple-600",
      "github-actions": "bg-gray-800",
      jenkins: "bg-blue-700",
      sonarqube: "bg-blue-500"
    };

    return (
      <div className={`${iconClasses} ${iconColors[iconName as keyof typeof iconColors] || 'bg-purple-500'} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
        {iconName.charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable, and secure cloud-native solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-500">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center group cursor-pointer">
                    <div className="mb-2 transition-transform group-hover:scale-110">
                      {getIconComponent(skill.icon)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
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
