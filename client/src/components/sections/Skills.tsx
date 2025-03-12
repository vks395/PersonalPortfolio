import AnimatedSection from "../animations/AnimatedSection";
import SkillCard from "../ui/skill-card";
import { Code, LayersIcon, Globe, Database, Server } from "lucide-react";
import { programmingLanguages, frameworksLibraries, webTechnologies, databaseCloud } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-700">
              A comprehensive overview of my technical expertise and proficiencies.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          {/* Programming Languages */}
          <AnimatedSection>
            <div className="mb-14">
              <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6 flex items-center">
                <Code className="text-primary mr-3 h-6 w-6" />
                Programming Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {programmingLanguages.map((skill, index) => (
                  <SkillCard 
                    key={index}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Frameworks & Libraries */}
          <AnimatedSection delay={0.1}>
            <div className="mb-14">
              <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6 flex items-center">
                <LayersIcon className="text-primary mr-3 h-6 w-6" />
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {frameworksLibraries.map((skill, index) => (
                  <SkillCard 
                    key={index}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Web, Database & Cloud */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6 flex items-center">
                  <Globe className="text-primary mr-3 h-6 w-6" />
                  Web Technologies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {webTechnologies.map((skill, index) => (
                    <SkillCard 
                      key={index}
                      icon={skill.icon}
                      name={skill.name}
                      compact={true}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6 flex items-center">
                  <Database className="text-primary mr-3 h-6 w-6" />
                  Databases & Cloud
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {databaseCloud.map((skill, index) => (
                    <SkillCard 
                      key={index}
                      icon={skill.icon}
                      name={skill.name}
                      compact={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
