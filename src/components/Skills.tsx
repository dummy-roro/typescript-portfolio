
import { 
  Cloud, 
  Container, 
  Package, 
  Settings, 
  Layers, 
  GitBranch, 
  Activity, 
  BarChart, 
  Search, 
  Shield, 
  Lock,
  Server,
  Code,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: Cloud, color: "bg-orange-500" },
        { name: "Azure", icon: Cloud, color: "bg-blue-600" },
        { name: "Google Cloud", icon: Cloud, color: "bg-green-500" }
      ]
    },
    {
      title: "Container & Orchestration", 
      skills: [
        { name: "Kubernetes", icon: Container, color: "bg-blue-500" },
        { name: "Docker", icon: Container, color: "bg-blue-600" },
        { name: "Helm", icon: Package, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: Code, color: "bg-purple-600" },
        { name: "Ansible", icon: Settings, color: "bg-red-500" },
        { name: "CloudFormation", icon: Layers, color: "bg-yellow-600" }
      ]
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "GitHub Actions", icon: GitBranch, color: "bg-gray-800" },
        { name: "Jenkins", icon: Server, color: "bg-blue-700" },
        { name: "GitLab CI", icon: GitBranch, color: "bg-orange-600" }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: Activity, color: "bg-red-600" },
        { name: "Grafana", icon: BarChart, color: "bg-orange-500" },
        { name: "ELK Stack", icon: Search, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Security & Compliance",
      skills: [
        { name: "SonarQube", icon: Shield, color: "bg-blue-500" },
        { name: "Trivy", icon: Shield, color: "bg-green-600" },
        { name: "OWASP ZAP", icon: Lock, color: "bg-purple-500" }
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
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="text-center group cursor-pointer">
                      <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                        <div className={`h-12 w-12 ${skill.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
