import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon, ChevronRight } from "lucide-react";

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  projects: string;
  responsibilities: string[];
  isLast?: boolean;
}

export default function TimelineItem({ 
  company, 
  position, 
  period, 
  projects, 
  responsibilities,
  isLast = false 
}: TimelineItemProps) {
  return (
    <div className={`timeline-item relative ${isLast ? '' : 'pb-12'}`}>
      <div className="before:content-[''] before:absolute before:left-[-29px] before:top-0 before:w-4 before:h-4 before:rounded-full before:bg-primary before:border-[3px] before:border-white before:z-[1]">
        <Card className="mb-6 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
              <h3 className="font-heading font-semibold text-xl text-primary">{company}</h3>
              <div className="md:ml-auto flex items-center text-slate-600 mt-1 md:mt-0">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{period}</span>
              </div>
            </div>
            
            <h4 className="font-medium text-lg text-slate-800 mb-3">{position}</h4>
            
            <h5 className="font-medium text-primary mb-3">Projects: {projects}</h5>
            
            <ul className="space-y-3 text-slate-700">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex">
                  <ChevronRight className="text-primary mt-1.5 mr-2 h-4 w-4" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
