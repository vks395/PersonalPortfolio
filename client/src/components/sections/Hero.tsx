import { motion as m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <m.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="inline-block text-primary font-medium mb-2">Software Engineer .NET</span>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight">
                Vicky Kumar <span className="text-primary">Sharma</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-700 mb-8">
              Detail-oriented software engineer with 7+ years of expertise in designing, developing, and maintaining ERP systems and business-critical applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="shadow-md hover:shadow-lg"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 shadow-sm hover:shadow-md"
                onClick={() => {
                  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Experience
              </Button>
            </div>
          </m.div>

          <m.div 
            className="md:w-1/2 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center shadow-lg">
              <span className="font-heading font-bold text-5xl text-white">VKS</span>
            </div>
          </m.div>
        </div>

        <m.div 
          className="mt-16 md:mt-24 flex flex-wrap justify-center gap-x-10 gap-y-6 text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center">
            <MapPin className="text-primary mr-2 h-5 w-5" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center">
            <Mail className="text-primary mr-2 h-5 w-5" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-primary mr-2 h-5 w-5" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="text-primary mr-2 h-5 w-5" />
            <span>7+ Years Experience</span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
