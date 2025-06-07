import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiHelm,
  SiTerraform,
  SiAnsible,
  SiAwscloudformation,
  SiGithubactions,
  SiJenkins,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
  SiElasticstack,
  SiSonarqube,
  SiAqua,
  SiOwasp,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", icon: SiAmazonaws, color: "text-orange-500" },
        { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-600" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "text-yellow-500" },
      ],
    },
    {
      title: "Container & Orchestration",
      skills: [
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Helm", icon: SiHelm, color: "text-indigo-500" },
      ],
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-500" },
        { name: "CloudFormation", icon: SiAwscloudformation, color: "text-yellow-600" },
      ],
    },
    {
      title: "CI/CD & Automation",
      skills: [
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-800" },
        { name: "Jenkins", icon: SiJenkins, color: "text-red-700" },
        { name: "GitLab CI", icon: SiGitlab, color: "text-orange-600" },
      ],
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: SiPrometheus, color: "text-red-600" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
        { name: "ELK Stack", icon: SiElasticstack, color: "text-yellow-500" },
      ],
    },
    {
      title: "Security & Compliance",
      skills: [
        { name: "SonarQube", icon: SiSonarqube, color: "text-blue-500" },
        { name: "Trivy", icon: SiAqua, color: "text-green-600" }, // Aqua Security owns Trivy
        { name: "OWASP ZAP", icon: SiOwasp, color: "text-purple-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable, and secure
            cloud-native solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-500">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="text-center group cursor-pointer"
                    >
                      <div className="mb-2 transition-transform group-hover:scale-110 flex justify-center">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg`}>
                          <IconComponent
                            className={`h-6 w-6 ${skill.color}`}
                          />
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
