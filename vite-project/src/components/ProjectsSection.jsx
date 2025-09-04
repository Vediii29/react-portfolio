import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Car Rental System",
    description:
      "A Java-based application that simulates a car rental service. Users can check car availability, book rentals, and manage transactions in a virtual environment.",
    tags: ["Java", "OOP"],
    githubUrl: "https://github.com/Vediii29/java",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "Built using Java and JDBC, this system streamlines patient registration, appointment scheduling, and billing. Includes role-based access and real-time reporting.",
    tags: ["Java", "JDBC", "OOP"],
    githubUrl: "https://github.com/Vediii29/Hospital_Management_System",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    description:
      "A responsive frontend food delivery site where users can browse items, manage a cart, and place simulated orders using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Vediii29/-Online-Food-Delivery",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio site to showcase my skills, projects, and contact info. Built with React and Tailwind CSS to ensure responsiveness and performance.",
    tags: ["ReactJS"],
    githubUrl: "https://github.com/Vediii29/react-portfolio"
  },
  {
    id: 5,
    title: "Money Manager - Full-Stack Expense Tracker",
    description:
      "A full-stack web app to track expenses, featuring a dynamic dashboard built with React and Tailwind CSS, secure REST APIs with Spring Boot and JWT, and a MySQL database.",
    tags: ["React.js", "Spring Boot", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/Vediii29/money-manager-frontend", // Remember to add your GitHub URL
  },
  {
    id: 6,
    title: "Student Enrollment API",
    description:
      "A backend application to manage student and coach enrollments. Features RESTful APIs built with Spring Boot, a MySQL database, and role-based access control using Spring Security and JWT.",
    tags: ["Java", "SpringBoot", "RestfulAPI", "MySQL", "Spring Security"],
    githubUrl: "https://github.com/Vediii29/enrollment-api",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance  .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg p-6 shadow-xs card-hover"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Vediii29"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
