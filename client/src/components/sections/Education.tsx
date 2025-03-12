import AnimatedSection from "../animations/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { education } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Education</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-700">
              My academic background and qualifications.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const icons = {
              'college': <GraduationCap className="h-6 w-6 text-primary" />,
              'highschool': <School className="h-6 w-6 text-primary" />,
              'secondary': <BookOpen className="h-6 w-6 text-primary" />
            };
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                      {icons[edu.type as keyof typeof icons]}
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-slate-900 mb-2">{edu.degree}</h3>
                    {edu.field && <p className="text-primary mb-1">{edu.field}</p>}
                    <p className="text-slate-700 mb-3">{edu.institution}</p>
                    <div className="flex items-center justify-between text-slate-600 text-sm">
                      <span>{edu.year}</span>
                      <span>Percentage: {edu.percentage}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
