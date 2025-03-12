import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { workExperience } from "@/lib/constants";
import AnimatedSection from "../animations/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CareerDataPoint {
  year: number;
  month: number;
  date: string;
  position: number; // 1 for junior, 2 for mid, 3 for senior
  role: string;
}

export default function CareerGrowthChart() {
  const [careerData, setCareerData] = useState<CareerDataPoint[]>([]);

  useEffect(() => {
    // Map position titles to numerical values for the chart
    const positionMap: Record<string, number> = {
      "ASP.NET Developer": 1,
      "Senior ASP.NET Developer": 2,
      "Software Engineer .NET": 3
    };

    const data: CareerDataPoint[] = [];

    // Process work experience data
    workExperience.forEach(job => {
      // Parse start and end dates - handle both dash types
      const dateParts = job.period.includes("–") ? 
                        job.period.split("–").map(d => d.trim()) : 
                        job.period.split("-").map(d => d.trim());
                        
      const startDate = new Date(dateParts[0]);
      
      let endDate;
      if (dateParts.length > 1) {
        if (dateParts[1].toLowerCase() === "current") {
          endDate = new Date(); // Current date
        } else {
          endDate = new Date(dateParts[1]);
        }
      } else {
        // If no end date is found, use current date
        endDate = new Date();
      }

      // Get position level
      const positionLevel = positionMap[job.position] || 1;

      // Create start point
      data.push({
        year: startDate.getFullYear(),
        month: startDate.getMonth() + 1,
        date: `${startDate.getFullYear()}-${startDate.getMonth() + 1}`,
        position: positionLevel,
        role: job.position
      });

      // Create end point (if not the same month/year)
      const endDateString = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`;
      const startDateString = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`;
      
      if (endDateString !== startDateString) {
        data.push({
          year: endDate.getFullYear(),
          month: endDate.getMonth() + 1,
          date: endDateString,
          position: positionLevel,
          role: job.position
        });
      }
    });

    // Sort data chronologically
    data.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });

    setCareerData(data);
  }, []);

  const formatYAxis = (value: number) => {
    switch (value) {
      case 1: return "Junior";
      case 2: return "Mid-level";
      case 3: return "Senior";
      default: return "";
    }
  };

  const formatTooltip = (value: any, name: string, props: any) => {
    if (name === "position") {
      return [formatYAxis(value), "Level"];
    }
    return [value, name];
  };

  return (
    <AnimatedSection className="mb-16">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Career Progression</CardTitle>
          <CardDescription>Your professional growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={careerData}
                margin={{ top: 10, right: 30, left: 60, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  label={{ value: 'Timeline', position: 'insideBottom', offset: -15 }}
                />
                <YAxis 
                  domain={[0, 4]} 
                  tickFormatter={formatYAxis}
                  label={{ value: 'Position Level', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip formatter={formatTooltip} />
                <Area 
                  type="monotone" 
                  dataKey="position" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.3}
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}