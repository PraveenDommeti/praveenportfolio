import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    Briefcase,
    Calendar,
    ChevronRight,
    Database,
    Download,
    ExternalLink,
    Github,
    Globe,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Trophy
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                PD
              </div>
              <span className="font-semibold">Praveen Dommeti</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-primary transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-slideIn3d">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-8 animate-glow hover:scale-110 transition-transform duration-500 shadow-2xl">
              <img
                src="/lovable-uploads/profile.png"
                alt="Praveen Dommeti"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-3d animate-[slideIn3d_1s_ease-out_0.5s_both]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 animate-pulse3d">
                Praveen Dommeti
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_1s_both]">
              Full-Stack Developer & Data Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out_1.2s_both]">
              Passionate about creating innovative web solutions and extracting meaningful insights from data. 
              I combine modern development practices with data-driven approaches to build impactful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-[fadeIn_1s_ease-out_1.4s_both]">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="group">
                View Projects
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
            <div className="flex justify-center space-x-6 pt-8 animate-[fadeIn_1s_ease-out_1.6s_both]">
              <a href="mailto:praveendommeti06@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/praveen-dommeti-06ba41279/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/PraveenDommeti" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate software engineer with expertise in modern web technologies and a commitment to delivering 
                exceptional digital solutions. Currently pursuing my Bachelor's in Information Technology with a strong CGPA of 9.09.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology spans across full-stack development, database management, and data visualization. 
                I believe in writing clean, efficient code and creating user experiences that make a difference.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Puducherry, India</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>praveendommeti06@gmail.com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-float">
              <Card className="text-center card-3d hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">1+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center card-3d hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">5+</CardTitle>
                  <CardDescription>Projects Completed</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center card-3d hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">6</CardTitle>
                  <CardDescription>Technologies</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center card-3d hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">8.96</CardTitle>
                  <CardDescription>Current CGPA</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with to create amazing digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 animate-tilt">
            <Card className="card-3d hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                   Programming & Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Frontend:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HTML5</Badge>
                      <Badge variant="secondary">CSS3</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Bootstrap</Badge>
                      <Badge variant="secondary">Responsive Design</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Backend:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">REST APIs</Badge>
                      <Badge variant="secondary">CRUD Operations</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Database:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Schema Design</Badge>
                      <Badge variant="secondary">Query Optimization</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                   AI-Powered Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Cursor</Badge>
                    <Badge variant="secondary">Trea</Badge>
                    <Badge variant="secondary">Windsurf</Badge>
                    <Badge variant="secondary">Lovable</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For rapid full-stack app development and prompt-based coding
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-3d hover:shadow-2xl transition-all duration-300 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                   Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Libraries/Frameworks:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">NumPy</Badge>
                      <Badge variant="secondary">Pandas</Badge>
                      <Badge variant="secondary">Matplotlib</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">AI Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Orange</Badge>
                      <Badge variant="secondary">Jeda AI</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      For visual and prompt-based data analysis
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground">
              My journey in the tech industry and key contributions
            </p>
          </div>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-primary" />
                    Associate Trainee
                  </CardTitle>
                  <CardDescription className="text-lg">Technosprint Info Solutions - Chennai, India</CardDescription>
                </div>
                <Badge variant="outline" className="flex items-center">
                  <Calendar className="w-3 h-3 mr-2" />
                  December 2023 - Present
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  Contributed to the development of several frontend web applications, leveraging modern frameworks and libraries to create user interfaces.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  Worked extensively on data management and database operations, ensuring seamless integration between frontend and backend systems.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  Participated in all phases of a full-stack project, contributing to both client-facing and server-side development, and ensuring seamless integration.
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                  Led a key project initiative, moving from conception to deployment lifecycle and guiding a small team to meet project milestones.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Some of the projects I've worked on that showcase my skills and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-rotate3d">
            <Card className="group hover:shadow-2xl transition-all duration-500 card-3d transform-gpu">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  IPL Cricket Database System
                  <Database className="w-5 h-5 text-primary" />
                </CardTitle>
                <CardDescription>MySQL Database Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Designed and implemented a relational database for IPL match statistics. Demonstrated strong understanding 
                  of relational data modeling and SQL optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Database Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 card-3d transform-gpu">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                   Trendly – Social Fashion & Shopping App
                  <Globe className="w-5 h-5 text-primary" />
                </CardTitle>
                <CardDescription>Full-Stack Developer & Product Designer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed a fashion-based social commerce app from scratch where users post daily outfits, tag products, 
                  earn streak points, and monetize through in-app product referrals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Lovable Vibe</Badge>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={() => window.open('https://lovable.dev/projects/4eede3be-2b11-4338-9cae-32b31e53ae58', '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 card-3d transform-gpu">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Data Visualization Project
                  <Trophy className="w-5 h-5 text-primary" />
                </CardTitle>
                <CardDescription>Python Data Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Visualized real-world datasets using Matplotlib to create bar graphs, pie charts, and line plots. 
                  Gained experience in Python libraries for data interpretation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Matplotlib</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages Known Section */}
      <section id="languages" className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages Known</h2>
            <p className="text-lg text-muted-foreground">Languages I am proficient in for professional, academic, and daily communication</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>English</CardTitle>
                <CardDescription>Native | Professional & Academic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Proficiency:</span>
                  <span>5/5 (100%)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hindi</CardTitle>
                <CardDescription>Native | Daily Communication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Proficiency:</span>
                  <span>5/5 (100%)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Telugu</CardTitle>
                <CardDescription>Native | Family & Regional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Proficiency:</span>
                  <span>5/5 (100%)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tamil</CardTitle>
                <CardDescription>Conversational | Regional Communication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Proficiency:</span>
                  <span>3/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-lg text-muted-foreground">Professional and academic certifications earned</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Professional Certificate in SQL and SQL for Data Analysis</CardTitle>
                <CardDescription>Institute of Management, Technology and Finance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Demonstrated proficiency in SQL queries, data analysis, and database management concepts.</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/lovable-uploads/SQl.png" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Python Programming Certificate</CardTitle>
                <CardDescription>Infosys</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Completed training in Python programming, covering core concepts, syntax, and practical applications.</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/lovable-uploads/python certificate(infosys).pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Python for Data Science</CardTitle>
                <CardDescription>NPTEL</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Learned data science concepts and techniques using Python, including data manipulation and visualization.</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/lovable-uploads/nptel certificate.jpg" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic journey and achievements
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      Bachelor of Technology in Information Technology
                    </CardTitle>
                    <CardDescription className="text-lg">Sri Manakula Vinayagar Engineering College, Puducherry, India<br/>Honours degree in Advanced Web Development</CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">2023 - 2027</Badge>
                    <div className="text-2xl font-bold text-primary">8.96 CGPA</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    12th CBSE
                  </CardTitle>
                  <CardDescription>Jawahar Navodaya Vidyalaya, Yanam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">83.2%</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                    10th CBSE
                  </CardTitle>
                  <CardDescription>Jawahar Navodaya Vidyalaya,Yanam</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">77%</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and interesting projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:praveendommeti06@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/praveen-dommeti-06ba41279/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>&copy; 2024 Praveen Dommeti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;