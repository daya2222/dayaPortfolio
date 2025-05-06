import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real Estate",
    description: "A personal portfolio website built with React to showcase my real estate project and development work in a clean and interactive way.",
    image: "https://cdn.pixabay.com/photo/2023/12/19/22/46/house-8458547_1280.jpg",
    tags: ["React", "Tailwind CSS"],
    liveLink: "https://realestatedaya.netlify.app/",
    githubLink: "https://github.com/daya2222/city-nest-explorer.git"
  },
];

const Projects = () => {
  // Calculate dynamic grid columns based on project count
  const getGridClass = () => {
    if (projects.length === 1) {
      return "flex justify-center"; // Center a single project
    } else if (projects.length === 2) {
      return "grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"; // Two projects centered
    } else {
      return "grid md:grid-cols-2 lg:grid-cols-3 gap-8"; // Three or more projects
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-900/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>
        
        <div className={getGridClass()}>
          {projects.length === 1 ? (
            // Single project centered with max width
            <div className="w-full max-w-md">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            // Multiple projects
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

// Extract ProjectCard as a separate component for cleaner code
const ProjectCard = ({ project }) => {
  return (
    <Card className="card-hover overflow-hidden flex flex-col border border-blue-500/10 bg-blue-950/20 shadow-lg m-4">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="border-b border-blue-500/10">
        <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">{tag}</Badge>
          ))}
        </div>
        <CardDescription className="text-foreground/70">{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between mt-auto pt-4">
        <Button variant="outline" size="sm" asChild className="rounded-full border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            Code
          </a>
        </Button>
        <Button size="sm" asChild className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-md">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;