export const profile = {
  name: "DASARI ABHIRAM",
  title: "Software Engineer | Full-Stack Developer | AI, Cloud & ServiceNow Enthusiast",
  tagline: "Building Intelligent Software That Matters",
  motto: "Learn • Build • Innovate",
  about: "I'm a Computer Science student passionate about building practical, intelligent software — from workflow automation on ServiceNow to full-stack web apps, cloud systems, and AI platforms. I enjoy turning complex engineering problems into clean, reliable products.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "MLR Institute of Technology",
    graduation: "Graduation: 2027",
    gpa: "CGPA: 7.53 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems (SQL)",
      "Operating Systems & Computer Networks",
      "Cloud Computing & Infrastructure",
      "Software Engineering & Agile Methodologies",
    ],
    projects: [
      "SentinelAI Industrial Safety Platform",
      "ServiceNow Automated Metro Ticketing System",
      "3D WebGL NeuralOS Portfolio Engine",
    ],
  },
  educationHistory: [
    {
      level: "Undergraduate (B.Tech)",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "MLR Institute of Technology",
      location: "Hyderabad, Telangana",
      period: "2023 — 2027",
      details: "Specializing in software engineering, distributed systems, cloud architecture, and intelligent workflow platforms.",
      metrics: "CGPA: 7.53 / 10.0",
    },
    {
      level: "Intermediate (10+2 / MPC)",
      degree: "Higher Secondary Education (MPC)",
      institution: "Sri Chaitanya Junior Kalasala (Sri Bhaskar Bhavan)",
      location: "Kukatpally, Hyderabad",
      period: "2021 — 2023",
      details: "Focus on Mathematics, Physics, and Chemistry (MPC) with rigorous analytical and problem-solving training.",
      metrics: "MPC Stream",
    },
    {
      level: "Secondary School (Class X)",
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhashyam High School",
      location: "VV Nagar, Hyderabad",
      period: "Completed 2021",
      details: "Foundational academic education with excellence in Mathematics, Science, and Computer Fundamentals.",
      metrics: "Class X Certificate",
    },
  ],
  location: "Hyderabad, Telangana, India",
  contact: {
    email: "itzzabhiu3@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
};

export const skillCategories = [
  { category: "Programming", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend & APIs", items: ["Node.js", "REST APIs"] },
  { category: "Cloud Infrastructure", items: ["AWS", "EC2", "S3", "VPC", "RDS", "DynamoDB", "ECR"] },
  { category: "DevOps & Tools", items: ["Docker", "Terraform", "Git", "GitHub", "CI/CD"] },
  { category: "ServiceNow Ecosystem", items: ["CSA", "CAD", "Flow Designer", "Business Rules", "Script Includes"] },
  { category: "Artificial Intelligence", items: ["Artificial Intelligence", "LLMs", "Prompt Engineering"] },
];

export const skills = skillCategories;

export const projects = [
  {
    title: "SentinelAI",
    subtitle: "Industrial Safety Intelligence Platform",
    description: "Enterprise predictive safety management platform built on ServiceNow. Integrates AI-assisted risk analysis, automated permit validation, incident escalation workflows, and real-time operational awareness dashboards.",
    tags: ["ServiceNow", "AI Risk Analysis", "Permit Intelligence", "ITSM", "Flow Designer"],
    metrics: "Reduced permit verification processing latency by 65%",
  },
  {
    title: "Metro Ticketing System",
    subtitle: "Automated Transit & Workflow Platform",
    description: "ServiceNow-powered metro ticket booking and passenger validation system. Features automated fare calculation, QR ticket generation, passenger flow analytics, and automated incident tracking.",
    tags: ["ServiceNow", "Workflow Automation", "JavaScript", "Client Scripts", "Business Rules"],
    metrics: "Automated 100% of ticket validation and incident logging workflows",
  },
  {
    title: "SmartRent",
    subtitle: "Modern Property Rental Finder",
    description: "Full-stack property rental discovery application with dynamic filtering, location search, interactive property cards, and seamless mobile-responsive UI.",
    tags: ["React", "Next.js", "Tailwind CSS", "REST API", "UI/UX"],
    metrics: "Achieved sub-second page load times and 100/100 Lighthouse performance score",
  },
];

export const certifications = [
  {
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "2026",
    code: "CSA-CONF-2026",
    details: "Validates proficiency in managing user access, configuring ITSM applications, creating automated flow triggers, schema customization, and platform security rules.",
  },
  {
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    date: "2026",
    code: "CAD-CONF-2026",
    details: "Demonstrates expertise in building custom scoped applications, writing reusable Script Includes, Business Rules, Client Scripts, and REST API integrations.",
  },
  {
    title: "AWS Academy — Getting Started with DevOps",
    issuer: "Amazon Web Services",
    date: "2024",
    code: "AWS-DEV-2024",
    details: "Comprehensive certification covering AWS EC2, S3 bucket management, VPC network architecture, CloudFormation templates, and CI/CD deployment pipelines.",
  },
  {
    title: "Oracle Java Foundations Certified Junior Associate",
    issuer: "Oracle",
    date: "2025",
    code: "ORCL-JAVA-2025",
    details: "Certified mastery of core Java syntax, object-oriented concepts, exception handling, collections framework, and algorithmic problem solving.",
  },
  {
    title: "NPTEL Cloud Computing — Elite Certification",
    issuer: "NPTEL / IIT Kharagpur",
    date: "2024",
    code: "NPTEL-CC-2024",
    details: "Rigorous academic certification covering cloud virtualization, hypervisors, distributed storage architectures, map-reduce algorithms, and SLA management.",
  },
  {
    title: "NPTEL Internet of Things (IoT)",
    issuer: "NPTEL / IIT Kharagpur",
    date: "2025",
    code: "NPTEL-IOT-2025",
    details: "Covers sensor networks, microcontroller programming, MQTT/CoAP protocols, edge computing architectures, and real-time telemetry processing.",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    date: "2024",
    code: "DEL-DA-2024",
    details: "Practical simulation focusing on enterprise data cleanup, SQL analytics, visualization dashboard creation, and executive technical reporting.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
