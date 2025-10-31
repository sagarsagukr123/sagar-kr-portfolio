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
  Twitter,
  Github,
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
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">React.js</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">Node.js</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">MongoDB</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">Java</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">Python</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">AWS</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">Docker</span>
            </div>
            <div className="bg-secondary rounded-lg p-2 flex items-center justify-center">
              <span className="text-xs font-medium">Git/GitHub</span>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">10+</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Briefcase className="w-4 h-4" />
            <span>Projects Completed</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">2</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Months Experience</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">0</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Collaborations</span>
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
                I'm a <span className="text-primary font-medium">Software Engineer | Full Stack Developer</span>
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
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>MS Ramaiah Institute (MCA)</span>
            </div>
            <div className="flex items-center gap-2 text-sm col-span-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>IST (India Standard Time)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <Button variant="default" className="gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href="https://www.instagram.com/sagarsagukr123/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </Button>
            <Button variant="default" className="gap-2 bg-success hover:bg-success/90" asChild>
              <a href="https://wa.me/919008341046" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Me</span>
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
            <div className="bg-secondary rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">Project Mentor</h4>
                    <span className="text-xs text-muted-foreground">2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground">MotionCut Internship</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sagar demonstrated excellent technical proficiency and professionalism during his internship. 
                His MERN and AI projects reflect deep understanding and creativity.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">Training Mentor</h4>
                    <span className="text-xs text-muted-foreground">2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground">TNSIF (Capgemini Foundation)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                He consistently delivered optimized, well-structured code and was proactive in improving product performance.
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
              <h3 className="text-sm font-semibold">Workflow Highlights</h3>
            </div>
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Goals & Objectives</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Research</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span className="text-sm font-medium">Wireframe</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4z" />
              </svg>
              <span className="text-sm font-medium">Prototyping</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Finalize Design</span>
            </div>
          </div>
        </Card>

        {/* Projects Card */}
        <Card className="p-6 bg-card border-border col-span-1 row-span-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Projects</p>
              <h3 className="text-sm font-semibold">Works Gallery</h3>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-500 to-red-500" />
          </div>
          <Button variant="default" className="w-full bg-primary hover:bg-primary/90" asChild>
            <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer">
              View Works
            </a>
          </Button>
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
            {['MotionCut', 'Capgemini Foundation', 'MS Ramaiah Institute'].map((org) => (
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
          <div className="space-y-2 flex-1">
            <a href="https://www.instagram.com/sagarsagukr123/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Instagram className="w-4 h-4" />
              <span className="text-xs">sagarsagukr123</span>
            </a>
            <a href="https://www.linkedin.com/in/sagar-k-r-146126269" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Linkedin className="w-4 h-4" />
              <span className="text-xs">sagar-k-r</span>
            </a>
            <a href="https://github.com/sagarsagukr123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-xs">sagarsagukr123</span>
            </a>
            <a href="https://x.com/KRSagar123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <Twitter className="w-4 h-4" />
              <span className="text-xs">@KRSagar123</span>
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
