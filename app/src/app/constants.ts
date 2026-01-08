// Types
export interface StatItem {
  number: string;
  label: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface CourseCard {
  image: string;
  badge: string;
  title: string;
  description: string;
  duration: string;
  level: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}

// Constants - TakeUForward Inspired Content
export const HERO_STATS: StatItem[] = [
  { number: "50K+", label: "Active Learners" },
  { number: "500+", label: "Problems Solved" },
  { number: "95%", label: "Placement Rate" },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: "📊",
    title: "DSA Mastery",
    description: "Master Data Structures & Algorithms from basics to advanced with our structured A2Z learning path.",
  },
  {
    icon: "🏗️",
    title: "System Design",
    description: "Learn to design scalable systems like the ones powering Google, Amazon, and Netflix.",
  },
  {
    icon: "💻",
    title: "Core CS Subjects",
    description: "Strong fundamentals in OS, DBMS, CN, and OOPs - everything you need for tech interviews.",
  },
  {
    icon: "🎯",
    title: "Company-Specific Prep",
    description: "Practice curated problem sets from Google, Amazon, Microsoft, Meta, and more top companies.",
  },
];

export const FEATURES: FeatureCard[] = [
  {
    icon: "🗺️",
    title: "Personalized Roadmaps",
    description: "Generate custom learning paths based on your timeline - from 2-month sprints to 12-month deep dives.",
  },
  {
    icon: "📹",
    title: "Expert Video Tutorials",
    description: "Learn from industry experts with in-depth video explanations for every concept and problem.",
  },
  {
    icon: "📝",
    title: "Curated Problem Sheets",
    description: "Access our famous A2Z DSA Sheet with 450+ handpicked problems organized by topics.",
  },
  {
    icon: "🏆",
    title: "Mock Tests & Contests",
    description: "Simulate real interview pressure with timed contests and company-specific mock tests.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description: "Track your learning journey with visual progress bars and performance analytics.",
  },
  {
    icon: "👥",
    title: "Interview Experiences",
    description: "Learn from verified interview experiences shared by students who cracked top companies.",
  },
];

export const COURSES: CourseCard[] = [
  {
    image: "linear-gradient(135deg, #003D82 0%, #0052B4 100%)",
    badge: "Bestseller",
    title: "Full-Stack Web Development",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.",
    duration: "⏱️ 12 weeks",
    level: "📊 Beginner",
  },
  {
    image: "linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)",
    badge: "New",
    title: "Data Science & AI",
    description: "Dive into machine learning, deep learning, and AI with Python and TensorFlow.",
    duration: "⏱️ 16 weeks",
    level: "📊 Advanced",
  },
  {
    image: "linear-gradient(135deg, #003D82 0%, #FF6B00 100%)",
    badge: "Trending",
    title: "Mobile App Development",
    description: "Build stunning iOS and Android apps using React Native and Flutter.",
    duration: "⏱️ 10 weeks",
    level: "📊 Intermediate",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: "📧", label: "Email", value: "hello@knowmoreirl.com" },
  { icon: "📱", label: "Phone", value: "+91 98765 43210" },
  { icon: "📍", label: "Location", value: "Bangalore, India" },
];

export const FOOTER_SECTIONS = {
  quickLinks: ["About Us", "DSA Sheet", "System Design", "Contact"],
  resources: ["Blog", "Interview Experiences", "Community", "Support"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const SOCIAL_LINKS = ["𝕏", "in", "yt", "ig"];