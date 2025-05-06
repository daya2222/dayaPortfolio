
import React, { useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React / TypeScript / Javascript", level: 85 },
  { name: "Material UI / Antd", level: 85 },
  { name: "Angular / TypeScript", level: 85 },
  { name: "Java / Spring Boot", level: 75 },
  { name: "Nodejs / Express", level: 75 },
  { name: "MS-SQL / MySQL / MongoDB", level: 75 },
  { name: "AWS / Azure", level: 55 },
];

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll(".skill-progress");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.opacity = "1";
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-blue-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-500/10 text-blue-400 h-8 w-8 rounded-full flex items-center justify-center mr-3">01</span>
              <span>Who I Am</span>
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
            I'm a Full Stack Developer with a passion for building complete, end-to-end web solutions that are as functional as they are beautiful. I thrive at the intersection of frontend finesse and backend architecture, creating seamless user experiences backed by robust, scalable systems.            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
            My work is driven by curiosity, a deep respect for code craftsmanship, and a desire to create technology that genuinely helps people.            </p>
            <p className="text-foreground/80 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
          </div>
          
          <div className="order-1 md:order-2" ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-blue-500/10 text-blue-400 h-8 w-8 rounded-full flex items-center justify-center mr-3">02</span>
              <span>My Skills</span>
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-foreground/70">{skill.level}%</span>
                  </div>
                  <div className="skill-progress opacity-0 transition-opacity duration-500" style={{ transitionDelay: `${index * 100}ms` }}>
                    <Progress value={skill.level} className="h-2 bg-blue-900/20" indicatorClassName="bg-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
