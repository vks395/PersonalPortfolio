import AnimatedSection from "../animations/AnimatedSection";
import { CheckCircle, Factory, Utensils, Shield, Warehouse } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Professional Summary</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Detail-oriented Software Engineer .NET with 7+ years of expertise in designing, developing, and maintaining ERP systems and business-critical applications for Manufacturing, Food & Beverage, and Safety industries. Proficient in ASP.NET MVC (C#), ASP.NET Web API and 3-tier architecture, with a focus on creating scalable, secure, and efficient solutions.
              </p>
              <p>
                Skilled in problem-solving, optimizing performance, and rapidly adapting to new challenges and environments. Strong background in relational database design, web technologies, and cloud platforms.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">Key Expertise</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>ERP System Development & Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>ASP.NET MVC & Web API Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Scalable & Secure Applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-semibold text-xl text-primary mb-3">Industries</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Factory className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <Utensils className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Food & Beverage</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Safety & Security</span>
                  </li>
                  <li className="flex items-start">
                    <Warehouse className="text-teal-600 mt-1 mr-2 h-5 w-5" />
                    <span>Warehouse Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
