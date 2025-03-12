import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level?: string;
  compact?: boolean;
}

export default function SkillCard({ icon: Icon, name, level, compact = false }: SkillCardProps) {
  return (
    <Card className="skill-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardContent className={cn("p-5 flex items-center", compact ? "py-4" : "")}>
        <div className="bg-primary/10 rounded-lg p-3 mr-4 flex items-center justify-center">
          <Icon className="text-primary text-xl" />
        </div>
        <div>
          <h4 className="font-heading font-medium text-slate-900">{name}</h4>
          {level && <p className="text-sm text-slate-600">{level}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
