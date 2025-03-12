import { useEffect, useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { workExperience } from "@/lib/constants";
import AnimatedSection from "../animations/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Function to calculate experience duration in years
const calculateDuration = (period: string) => {
  const dates = period.split("–").map(date => date.trim());
  
  if (dates.length !== 2) return 0;
  
  const startDate = new Date(dates[0]);
  let endDate;
  
  if (dates[1].toLowerCase() === "current") {
    endDate = new Date();
  } else {
    endDate = new Date(dates[1]);
  }
  
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  
  return parseFloat(diffYears.toFixed(1));
};

export default function ExperienceChart() {
  const [chartData, setChartData] = useState<any[]>([]);
  const [skillsData, setSkillsData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate experience duration data
    const experienceData = workExperience.map(job => {
      return {
        name: job.company.split(" ")[0], // Use first word of company name for brevity
        years: calculateDuration(job.period),
        fullName: job.company
      };
    }).reverse(); // Show in chronological order
    
    setChartData(experienceData);

    // Create skills by job data based on responsibilities
    const skills = workExperience.map(job => {
      // Extract key skills from responsibilities
      const skillKeywords = [
        "API", "Mobile", "UI", "Dashboard", "Documentation", 
        "Testing", "Architecture", "Performance", "Development"
      ];
      
      const skillCounts: Record<string, number> = {};
      
      // Initialize all skills to 0
      skillKeywords.forEach(skill => {
        skillCounts[skill] = 0;
      });
      
      // Count mentions in responsibilities
      job.responsibilities.forEach(resp => {
        skillKeywords.forEach(skill => {
          if (resp.includes(skill)) {
            skillCounts[skill] += 1;
          }
        });
      });
      
      return {
        name: job.company.split(" ")[0],
        ...skillCounts
      };
    });
    
    setSkillsData(skills);
  }, []);

  const getRandomColor = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <AnimatedSection className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Experience Timeline</CardTitle>
            <CardDescription>Years spent at each company</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip 
                    formatter={(value, name) => [`${value} years`, name]}
                    labelFormatter={(label) => {
                      const item = chartData.find(d => d.name === label);
                      return item ? item.fullName : label;
                    }}
                  />
                  <Bar dataKey="years" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Skills by Company</CardTitle>
            <CardDescription>Key skills utilized across positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skillsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  {skillsData.length > 0 && Object.keys(skillsData[0] || {}).filter(key => key !== "name").map((key) => (
                    <Bar 
                      key={key} 
                      dataKey={key} 
                      fill={getRandomColor()} 
                      stackId="stack"
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}