import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from "recharts";
import {
  programmingLanguages,
  frameworksLibraries,
  webTechnologies,
  databaseCloud
} from "@/lib/constants";
import AnimatedSection from "../animations/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom renderer for the Pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function SkillsDistributionChart() {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57"
  ];

  const [skillsByCategory, setSkillsByCategory] = useState<Record<string, any[]>>({
    programmingLanguages: [],
    frameworksLibraries: [],
    webTechnologies: [],
    databaseCloud: []
  });

  const [skillsByLevel, setSkillsByLevel] = useState<any[]>([]);

  useEffect(() => {
    // Transform the skills data for the charts
    const processedSkillsByCategory = {
      programmingLanguages: programmingLanguages.map(lang => ({
        name: lang.name,
        value: 1
      })),
      frameworksLibraries: frameworksLibraries.map(fw => ({
        name: fw.name,
        value: 1
      })),
      webTechnologies: webTechnologies.map(tech => ({
        name: tech.name,
        value: 1
      })),
      databaseCloud: databaseCloud.map(db => ({
        name: db.name,
        value: 1
      }))
    };
    
    setSkillsByCategory(processedSkillsByCategory);

    // Group skills by proficiency level
    const levels: Record<string, number> = {
      "Expert": 0,
      "Advanced": 0,
      "Intermediate": 0
    };

    // Count skills by proficiency level
    [...programmingLanguages, ...frameworksLibraries].forEach(skill => {
      if (skill.level && levels[skill.level] !== undefined) {
        levels[skill.level] += 1;
      }
    });

    // Transform the data for the pie chart
    const levelData = Object.entries(levels)
      .filter(([_, count]) => count > 0)
      .map(([level, count]) => ({
        name: level,
        value: count
      }));

    setSkillsByLevel(levelData);
  }, []);

  return (
    <AnimatedSection className="mb-16">
      <div className="grid grid-cols-1 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Skills Distribution</CardTitle>
            <CardDescription>Visual breakdown of skills and proficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="proficiency" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="proficiency">Proficiency Levels</TabsTrigger>
                <TabsTrigger value="categories">Skill Categories</TabsTrigger>
              </TabsList>
              
              <TabsContent value="proficiency" className="mt-6">
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillsByLevel}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {skillsByLevel.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[index % COLORS.length]} 
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} skills`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="categories" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Programming Languages Chart */}
                  <div className="h-72">
                    <h3 className="text-center font-medium mb-2">Programming Languages</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={skillsByCategory.programmingLanguages}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {skillsByCategory.programmingLanguages.map((_, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Frameworks & Libraries Chart */}
                  <div className="h-72">
                    <h3 className="text-center font-medium mb-2">Frameworks & Libraries</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={skillsByCategory.frameworksLibraries}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {skillsByCategory.frameworksLibraries.map((_, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}