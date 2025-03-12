import { useState } from "react";
import AnimatedSection from "../animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Share2 } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-slate-700">
              Feel free to contact me for any inquiries or opportunities.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Location</h4>
                      <p className="text-slate-700">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Email</h4>
                      <a href={`mailto:${personalInfo.email}`} className="text-primary hover:text-primary/80 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Phone</h4>
                      <a href={`tel:${personalInfo.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4">
                      <Share2 className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Social Profiles</h4>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href="#" 
                          className="bg-slate-100 hover:bg-primary/10 text-slate-700 hover:text-primary p-2 rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a 
                          href="#" 
                          className="bg-slate-100 hover:bg-primary/10 text-slate-700 hover:text-primary p-2 rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                        <a 
                          href="#" 
                          className="bg-slate-100 hover:bg-primary/10 text-slate-700 hover:text-primary p-2 rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2" delay={0.1}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-heading font-semibold text-2xl text-slate-900 mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <Input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message" 
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full shadow-md hover:shadow-lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
