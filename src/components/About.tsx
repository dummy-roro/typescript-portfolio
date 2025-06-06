
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-space-grotesk">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-white font-space-grotesk">DevOps & DevSecOps Enthusiast</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-inter">
                Hands-on experience building production-ready cloud-native systems using tools like 
                Terraform, EKS, Argo CD, GitHub Actions, SonarQube, Jenkins, and AWS. 
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6 font-inter">
                Focused on automation, CI/CD, and secure Kubernetes environments. Passionate about 
                implementing DevSecOps practices to ensure security is integrated throughout the 
                development lifecycle.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-800 text-cyan-400 border-gray-700">Cloud Native</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-cyan-400 border-gray-700">Infrastructure as Code</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-cyan-400 border-gray-700">Security</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-cyan-400 border-gray-700">Automation</Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-1 rounded-lg">
                <div className="bg-gray-900 p-8 rounded-lg">
                  <div className="space-y-4 font-inter">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Cloud Platforms</span>
                      <span className="text-cyan-400 font-medium">AWS, Azure</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Container Orchestration</span>
                      <span className="text-cyan-400 font-medium">Kubernetes, EKS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Infrastructure</span>
                      <span className="text-cyan-400 font-medium">Terraform, Helm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">CI/CD</span>
                      <span className="text-cyan-400 font-medium">GitHub Actions, Jenkins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Monitoring</span>
                      <span className="text-cyan-400 font-medium">Prometheus, Grafana</span>
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
