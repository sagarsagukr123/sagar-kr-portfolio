import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Mail,
  Calendar,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Clock,
  Instagram,
  MessageCircle,
  Linkedin,
  FileText,
  Github,
  Twitter,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        
        {/* Tech Stack Card */}
        <Card className="p-6 bg-card border-border col-span-1 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">My Stacks</p>
              <h3 className="text-sm font-semibold">Tech Arsenal</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-4 h-4" alt="React" />
              <span className="text-xs font-medium">React.js</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-4 h-4" alt="Node.js" />
              <span className="text-xs font-medium">Node.js</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-4 h-4" alt="Express" />
              <span className="text-xs font-medium">Express.js</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-4 h-4" alt="MongoDB" />
              <span className="text-xs font-medium">MongoDB</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-4 h-4" alt="Java" />
              <span className="text-xs font-medium">Java</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-4 h-4" alt="Python" />
              <span className="text-xs font-medium">Python</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="w-4 h-4" alt="AWS" />
              <span className="text-xs font-medium">AWS</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-4 h-4" alt="Git" />
              <span className="text-xs font-medium">Git & GitHub</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="w-4 h-4" alt="CI/CD" />
              <span className="text-xs font-medium">CI/CD</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" className="w-4 h-4" alt="Socket.io" />
              <span className="text-xs font-medium">Socket.io</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" className="w-4 h-4" alt="Networking" />
              <span className="text-xs font-medium">Networks</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-4 h-4" alt="OOPs" />
              <span className="text-xs font-medium">OOPs in Java</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/security/security-original.svg" className="w-4 h-4" alt="Cybersecurity" />
              <span className="text-xs font-medium">Cybersecurity</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-4 h-4" alt="DBMS" />
              <span className="text-xs font-medium">DBMS</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center gap-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-4 h-4" alt="Data Structures" />
              <span className="text-xs font-medium">Data Structures</span>
            </div>
          </div>
        </Card>

        {/* Stats Card 1 */}
        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">10+</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="w-4 h-4" />
            <span>Projects</span>
          </div>
        </Card>

        {/* Stats Card 2 */}
        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">5+</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span>Tech Stacks</span>
          </div>
        </Card>

        {/* Stats Card 3 */}
        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">3+</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Certifications</span>
          </div>
        </Card>

        {/* Main Profile Card */}
        <Card className="p-6 bg-card border-border col-span-1 md:col-span-2 row-span-2 flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Available To Work</span>
            </div>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://drive.google.com/file/d/1fbbgVux43B32qjOXMwjByk3szR_ECAOn/view" target="_blank" rel="noopener noreferrer">
                <span className="text-sm">Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden">
              <img src="/sagar-profile.jpg" alt="Sagar K R" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Sagar K R</h1>
              <p className="text-muted-foreground">
                MCA Student @ MS Ramaiah Institute (CGPA: 8.53)
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Full Stack Developer | Cloud & DevOps Enthusiast | Cybersecurity
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-primary" />
              <span>English, Hindi & Kannada</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Open to Opportunities</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>MS Ramaiah Institute of Technology</span>
            </div>
            <div className="flex items-center gap-2 text-sm col-span-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.97 1.39 2.7 3.32 3.21 2.1.55 2.38 1.32 2.38 1.9 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.37-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
              <a href="https://leetcode.com/u/sagarsagu/" target="_blank" rel="noopener noreferrer" className="hover:underline">LeetCode Profile</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <Button variant="default" className="gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href="https://www.linkedin.com/in/sagar-k-r-146126269" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button variant="default" className="gap-2 bg-gray-800 hover:bg-gray-700" asChild>
              <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="default" className="gap-2 bg-green-600 hover:bg-green-700 col-span-2" asChild>
              <a href="https://wa.me/919008341046" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span>Contact: +91 9008341046</span>
              </a>
            </Button>
          </div>
        </Card>

        {/* Testimonials Card */}
        <Card className="p-6 bg-card border-border col-span-1 md:col-span-2 row-span-2 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Testimonials</p>
              <h3 className="text-sm font-semibold">Reviews Showcase</h3>
            </div>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto">
            <div className="bg-secondary rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">Project Mentor</h4>
                    <span className="text-xs text-muted-foreground">2025</span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>MotionCut Internship</span>
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sagar demonstrated excellent technical proficiency and leadership during his internship. 
                His innovative approach to MERN stack development and AI integration was instrumental in 
                delivering high-impact projects ahead of schedule.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.01a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.01a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">Training Mentor</h4>
                    <span className="text-xs text-muted-foreground">2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>TNSIF (Capgemini Foundation)</span>
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Demonstrated exceptional skills in full-stack development, consistently delivering optimized, 
                well-structured code. Showed great initiative in implementing best practices and was 
                proactive in improving system performance and user experience.
              </p>
            </div>
          </div>
        </Card>

        {/* Work Process Card */}
        <Card className="p-6 bg-card border-border col-span-1 md:col-span-2 lg:col-span-1 row-span-2 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Work Process</p>
              <h3 className="text-sm font-semibold">My Workflow</h3>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            {/* Step 1 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">1</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Discovery & Planning</h4>
                <p className="text-xs text-muted-foreground">Understanding project requirements, setting goals, and creating a roadmap.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">2</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Research & Analysis</h4>
                <p className="text-xs text-muted-foreground">Market research, competitor analysis, and technology stack selection.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">3</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Design & Prototyping</h4>
                <p className="text-xs text-muted-foreground">Creating wireframes, UI/UX design, and interactive prototypes.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">4</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Development</h4>
                <p className="text-xs text-muted-foreground">Agile development with continuous integration and testing.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">5</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Testing & QA</h4>
                <p className="text-xs text-muted-foreground">Rigorous testing across devices and platforms to ensure quality.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="group flex items-start gap-4 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-medium">6</div>
              <div>
                <h4 className="font-medium text-sm mb-1">Deployment & Maintenance</h4>
                <p className="text-xs text-muted-foreground">Seamless deployment and ongoing support with performance monitoring.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="p-6 bg-card border-border col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">My Works</p>
                <h3 className="text-sm font-semibold">Projects Gallery</h3>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <span>View All</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 - MERN Authentication */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
                <img 
                  src="https://tse2.mm.bing.net/th/id/OIP.PTX5JtgOmbYwPDi1MZHoBAHaEX?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="MERN Authentication" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-medium">MERN Advanced Authentication</h4>
                    <p className="text-xs text-gray-300">MERN, Mailtrap, JWT, TailwindCSS</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">MongoDB</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Express</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">React</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Node.js</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">JWT</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Developed a secure authentication system using the MERN stack (MongoDB, Express.js, React.js, and Node.js), featuring email OTP verification as an added layer of security. The system includes user registration, email verification, login and logout functionality, ensuring secure access by verifying user identity through email OTPs.
                </p>
                <div className="flex justify-between items-center">
                  <a href="https://github.com/sagarsagukr123/Mern-Authentication-Project" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    View Code
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>

            {/* Project 2 - Real-Time Chat App */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                <img 
                  src="https://www.contus.com/blog/wp-content/uploads/2023/11/rocket.chat-real-time-chat-solutions.webp" 
                  alt="Real-Time Chat Application" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-medium">Real-Time Chat Application</h4>
                    <p className="text-xs text-gray-300">MERN, Socket.io, JWT, TailwindCSS</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">React</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Node.js</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Socket.io</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">MongoDB</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  Developed a real-time chat application using MERN, Socket.io, and JWT, featuring instant messaging, online user tracking, image uploads via Cloudinary, global state management with Zustand, and deployed with production-ready optimization.
                </p>
                <div className="flex justify-between items-center">
                  <a href="https://github.com/sagarsagukr123/fullstack-chat-app" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    View Code
                  </a>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>

            {/* Project 3 - Deepfake Detection */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg md:col-span-2">
              <div className="relative h-64 bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
                <img 
                  src="https://img.freepik.com/premium-photo/technological-sense-artificial-intelligence-robot-pictures_1060453-203.jpg" 
                  alt="Deepfake Detection System" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h4 className="font-medium text-lg">Deepfake Image Detection System</h4>
                    <p className="text-sm text-gray-300">Python, TensorFlow, Keras, OpenCV, Streamlit</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Python</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">TensorFlow</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Deep Learning</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Computer Vision</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Developed and deployed an image-based deepfake detection app using XceptionNet, TensorFlow, Keras, OpenCV, and Streamlit. Implemented data augmentation, transfer learning, and conducted performance comparison using MobileNet and InceptionResNetV2 models for accurate detection of manipulated media.
                </p>
                <div className="flex justify-between items-center">
                  <a href="https://github.com/sagarsagukr123/deepfake-detection" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    View Code
                  </a>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Areas of Expertise Card */}
        <Card className="p-6 bg-card border-border col-span-1 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Expertise</p>
              <h3 className="text-sm font-semibold">Areas of Expertise</h3>
            </div>
          </div>
          <div className="space-y-2 mb-4 flex-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>AI & ML Projects</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Cloud & Deployment</span>
            </div>
          </div>
          <Button variant="default" className="w-full bg-primary hover:bg-primary/90" asChild>
            <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </Card>

        {/* Internship and Certifications Card */}
        <Card className="p-6 bg-card border-border col-span-1 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Achievements</p>
              <h3 className="text-sm font-semibold">INTERNSHIP AND CERTIFICATIONS</h3>
            </div>
          </div>
          <div className="space-y-4">
            {/* Web Development Intern Card */}
            <div className="group relative p-4 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary/80 hover:shadow-md border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-blue-500" />
                  <h4 className="font-medium text-sm text-foreground">Web Development Intern</h4>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="font-medium text-foreground">Motion Cut</span> • Mar 2025 - May 2025
                </p>
                <p className="mt-2 text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  Worked on real web development tasks and built a shopping mall website.
                </p>
              </div>
            </div>

            {/* Java Full Stack Card */}
            <div className="group relative p-4 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary/80 hover:shadow-md border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <h4 className="font-medium text-sm text-foreground">Java Full Stack Development</h4>
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="font-medium text-foreground">TNSIF Foundation (Capgemini)</span>
                </p>
                <p className="mt-2 text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors">
                  Successfully completed the Campus to Technical Careers Training Program covering:
                </p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors pl-4 list-disc">
                  <li>Core: DSA, SQL, Spring Boot</li>
                  <li>Frontend: HTML5, CSS3, JavaScript, React</li>
                </ul>
              </div>
            </div>

            {/* NPTEL Certification Card */}
            <div className="group relative p-4 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary/80 hover:shadow-md border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6 3-6 3-6-3 6-3zm6 11.4l-6 3-6-3V9.2l6 3v6.8l6-3.8z"/>
                  </svg>
                  <h4 className="font-medium text-sm text-foreground">NPTEL Data Mining</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Silver</span>
                  <span className="text-xs font-medium text-foreground">81%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Collaborations Card */}
        <Card className="p-6 bg-card border-border col-span-1 md:col-span-2 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Worked With</p>
              <h3 className="text-sm font-semibold">Collaborations</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['MotionCut', 'Capgemini Foundation', 'MS Ramaiah Institute of Technology'].map((org) => (
              <div key={org} className="flex items-center justify-center p-3 bg-secondary rounded-lg">
                <span className="text-xs font-medium text-muted-foreground">{org}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Online Presence Card */}
        <Card className="p-6 bg-card border-border col-span-1 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Follow Me</p>
              <h3 className="text-sm font-semibold">Online Presence</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://x.com/KRSagar123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-md transition-colors">
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
            <a href="https://www.instagram.com/sagarsagukr123/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-md transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
          <div className="space-y-2 flex-1">
            <a href="https://www.linkedin.com/in/sagar-k-r-146126269" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="https://leetcode.com/u/sagarsagu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.674 2.609c.514.515 1.365.497 1.94-.038.57-.53.546-1.427-.062-1.977l-2.756-2.62c-.85-.86-2.012-1.322-3.167-1.362-1.065-.04-2.115.279-2.947.906-.411.306-.812.667-1.158 1.08-.013.018-1.44 1.866-2.062 2.726-.329.454-.602.943-.765 1.433-.18.548-.249 1.107-.247 1.668-.009.568.07 1.132.247 1.667.164.49.438.979.767 1.435.622.86 2.05 2.707 2.062 2.726.346.412.75.772 1.16 1.078.83.627 1.88.945 2.946.906 1.155-.04 2.317-.502 3.167-1.362l2.756-2.62c.608-.55.632-1.447.062-1.977-.575-.535-1.426-.553-1.94-.038zM20.811 13.01h-9.565c-.596 0-1.069.508-1.069 1.125s.473 1.127 1.069 1.127h9.565c.592 0 1.069-.509 1.069-1.127s-.477-1.125-1.069-1.125z"/>
              </svg>
              <span>LeetCode</span>
            </a>
            <a href="https://www.naukri.com/code360/profile/bd7e4360-ece3-4c41-a00b-aac6a450e6c5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2zm4.5 0h-2.5v-11H14v11zm4.5 0H16v-11h2.5v11z"/>
              </svg>
              <span>Code360</span>
            </a>
            <a href="https://www.hackerrank.com/profile/sagarsagukr123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c1.668 0 3.333.009 5-.027 1.667-.017 2.403-.39 3.25-.833.85-.444 1.333-.667 1.75-1.083.417-.417.64-.9 1.083-1.75.444-.847.816-1.583.833-3.25.018-1.667.027-3.333.027-5s-.009-3.333-.027-5c-.017-1.667-.39-2.403-.833-3.25-.444-.85-.666-1.333-1.083-1.75-.417-.417-.9-.64-1.75-1.083C17.403-.39 16.667-.762 15-.78 13.333-.798 11.668-.807 10-.807S6.667-.798 5-.78C3.333-.762 2.597-.39 1.75.053.9.497.417.72 0 1.137-.417.72-.64 1.203-1.083 2.053c-.444.847-.816 1.583-.833 3.25C-1.992 8.667-2 10.333-2 12s.008 3.333.026 5c.017 1.667.39 2.403.833 3.25.444.85.666 1.333 1.083 1.75.417.417.9.64 1.75 1.083.847.444 1.583.816 3.25.833 1.667.018 3.333.027 5 .027s3.333-.009 5-.027c1.667-.017 2.403-.39 3.25-.833.85-.444 1.333-.667 1.75-1.083.417-.417.64-.9 1.083-1.75.444-.847.816-1.583.833-3.25.018-1.667.027-3.333.027-5s-.009-3.333-.027-5c-.017-1.667-.39-2.403-.833-3.25-.444-.85-.666-1.333-1.083-1.75-.417-.417-.9-.64-1.75-1.083-.847-.444-1.583-.816-3.25-.833C15.333-.792 13.668-.8 12-.8zM9.5 17.5H7v-11h2.5v11zm4.5 0h-2.5v-11H14v11zm4.5 0H16v-11h2.5v11z"/>
              </svg>
              <span>HackerRank</span>
            </a>
          </div>
        </Card>

        {/* CTA Card */}
        <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50 col-span-1 row-span-1 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Let's Work Together</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Let's Make Magic Happen Together!
          </p>
          <div className="space-y-2 w-full">
            <Button variant="default" className="w-full gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:sagarsagukr123@gmail.com">
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>
            </Button>
            <Button variant="default" className="w-full gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href="https://drive.google.com/file/d/1fbbgVux43B32qjOXMwjByk3szR_ECAOn/view" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Index;
