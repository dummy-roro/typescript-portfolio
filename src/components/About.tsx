
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">DevOps & DevSecOps Enthusiast</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Hands-on experience building production-ready cloud-native systems using tools like 
                Terraform, EKS, Argo CD, GitHub Actions, SonarQube, Jenkins, and AWS. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Focused on automation, CI/CD, and secure Kubernetes environments. Passionate about 
                implementing DevSecOps practices to ensure security is integrated throughout the 
                development lifecycle.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Cloud Native</Badge>
                <Badge variant="secondary">Infrastructure as Code</Badge>
                <Badge variant="secondary">Security</Badge>
                <Badge variant="secondary">Automation</Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-1 rounded-lg">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Cloud Platforms</span>
                      <span className="text-purple-500">AWS, Azure</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Container Orchestration</span>
                      <span className="text-purple-500">Kubernetes, EKS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Infrastructure</span>
                      <span className="text-purple-500">Terraform, Helm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">CI/CD</span>
                      <span className="text-purple-500">GitHub Actions, Jenkins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Monitoring</span>
                      <span className="text-purple-500">Prometheus, Grafana</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
