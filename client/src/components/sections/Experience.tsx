import AnimatedSection from "../animations/AnimatedSection";
import TimelineItem from "../ui/timeline-item";
import { workExperience } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-700">
              My professional journey showcasing my roles and achievements.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-12 md:pl-16">
            {/* Timeline vertical line */}
            <div className="absolute left-0 sm:left-1 md:left-2 top-0 bottom-0 w-0.5 bg-slate-200 ml-6"></div>

            {workExperience.map((job, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <TimelineItem 
                  company={job.company}
                  position={job.position}
                  period={job.period}
                  projects={job.projects}
                  responsibilities={job.responsibilities}
                  isLast={index === workExperience.length - 1}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
