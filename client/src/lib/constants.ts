import { Database, Code, Globe, Server, LayoutDashboard, Monitor, FolderArchive, Database as DatabaseIcon } from "lucide-react";

export const personalInfo = {
  name: "Vicky Kumar Sharma",
  title: "Software Engineer .NET",
  location: "Kolkata, India",
  email: "xyz@gmail.com",
  phone: "+91-999999999",
  experience: "7+ years"
};

export const programmingLanguages = [
  { name: "C#", level: "Advanced", icon: Code },
  { name: "JavaScript", level: "Advanced", icon: Code },
  { name: "SQL", level: "Advanced", icon: Database },
  { name: "LINQ", level: "Advanced", icon: Code }
];

export const frameworksLibraries = [
  { name: "ASP.NET", level: "Expert", icon: Monitor },
  { name: "ASP.NET Core", level: "Advanced", icon: FolderArchive },
  { name: "Entity Framework", level: "Advanced", icon: Database },
  { name: "Bootstrap", level: "Advanced", icon: LayoutDashboard },
  { name: "React", level: "Intermediate", icon: Code },
  { name: "Unit Testing", level: "Intermediate", icon: Code }
];

export const webTechnologies = [
  { name: "RESTful APIs", icon: Code },
  { name: "HTML5 / CSS3", icon: Code },
  { name: "AJAX", icon: Code },
  { name: "Web API", icon: Globe }
];

export const databaseCloud = [
  { name: "MS SQL Server", icon: DatabaseIcon },
  { name: "T-SQL", icon: Database },
  { name: "Azure", icon: Server },
  { name: "Azure DevOps", icon: Server }
];

export const workExperience = [
  {
    company: "Indusnet Technology Pvt Limited",
    position: "Software Engineer .NET",
    period: "07/2021 – Current",
    projects: "SOMAX Delivery management system",
    responsibilities: [
      "Contributed & led new functionality implementation in Application – Multi Approval Level, Personnels, Work Order Planning, Project, Purchase Request Auto Generation, Web API for Monnit sensor data import & export and other modules.",
      "Contributed in Responsive Mobile View Implement in dashboard for workbench module using Mobiscroll, Dynamic UI configuration in Work Request and Equipment and Dev express Reporting.",
      "Developed reusable/common function and classes and also optimized the code followed best practices.",
      "Handling R & D of New Feature Implementation and used co-pilot in project for efficiency and time saving."
    ]
  },
  {
    company: "Quick Innovative Technologies",
    position: "Senior ASP.NET Developer",
    period: "06/2019 - 05/2021",
    projects: "Visitor Management System, Audit Management System, Warehouse Management System, etc.",
    responsibilities: [
      "Undertook the responsibility of designing the project and database architecture from the ground up, while also creating detailed documentation.",
      "Played a crucial role in the project's development, testing, error handling, and client communication processes.",
      "Optimised existing software applications for improved performance and scalability, ensuring compatibility with evolving technologies.",
      "Managed API integration, ensuring proper handling of SMS delivery and error responses, resulting in a 95% delivery success rate."
    ]
  },
  {
    company: "Techway",
    position: "ASP.NET Developer",
    period: "06/2016 - 07/2019",
    projects: "Attendance System, Bsafe Application, Patient Care Management system, etc.",
    responsibilities: [
      "Created mobile friendly charts and graphs for dashboard using google chart and fusion chart.",
      "Conducted thorough testing and debugging of web applications to ensure reliability, usability, and compatibility across multiple browsers.",
      "Integrated third-party APIs to extend web application functionalities, including payment gateways, social media, and other services (SMS services integration).",
      "Optimised web applications for mobile devices, ensuring responsive design and seamless user experiences across all platforms."
    ]
  }
];

export const education = [
  {
    type: "college",
    degree: "B.Tech",
    field: "Electronics and Communication Engineering",
    institution: "Maulana Abul Kalam Azad University of Technology",
    year: "2016",
    percentage: "65.19%"
  },
  {
    type: "highschool",
    degree: "Higher Secondary",
    field: "Science",
    institution: "West Bengal Board of Secondary Higher Education",
    year: "2011",
    percentage: "66.00%"
  },
  {
    type: "secondary",
    degree: "Secondary",
    institution: "West Bengal Board of Secondary Education",
    year: "2009",
    percentage: "73.23%"
  }
];
