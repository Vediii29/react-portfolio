import { Briefcase, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
IT Graduate & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
             I’m Vedika Deshmukh, an Information Technology graduate from Sinhagad College of Engineering, Pune. I specialize in building responsive, user-friendly web applications using modern frontend frameworks and also have hands-on experience with backend development and databases.
            </p>

            <p className="text-muted-foreground">
              I completed a web development internship at Scalefull Technology, where I worked on creating responsive websites using core frontend technologies. Along with strong programming fundamentals in Java and SQL, I have project experience with React, Spring Boot, and RESTful APIs. I’m a quick learner who enjoys exploring new tools and continuously improving my development skills.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Vedika_Deshmukh_9763023502 (1).pdf" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards (Only 2 now) */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive websites using HTML, CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>

            {/* Internship Experience Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Internship Experience</h4>
                  <p className="text-muted-foreground">
                    Worked on real-world frontend projects during internship at Scalefull Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
