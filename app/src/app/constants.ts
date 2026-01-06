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

// Constants
export const HERO_STATS: StatItem[] = [
  { number: "10K+", label: "Active Learners" },
  { number: "50+", label: "Expert Courses" },
  { number: "95%", label: "Success Rate" },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    icon: "🎯",
    title: "Goal-Oriented Learning",
    description: "Clear objectives and structured paths help you achieve your learning goals faster and more efficiently.",
  },
  {
    icon: "💡",
    title: "Ask Unlimited Questions",
    description: "Our community thrives on curiosity. Get answers from experts and peers whenever you need them.",
  },
  {
    icon: "🤝",
    title: "Inclusive Community",
    description: "Everyone is welcome here. We foster a supportive environment where all learners can thrive.",
  },
  {
    icon: "🔥",
    title: "Challenge Yourself",
    description: "Don't shy away from difficult topics. Embrace challenges and emerge stronger on the other side.",
  },
];

export const FEATURES: FeatureCard[] = [
  {
    icon: "📚",
    title: "Comprehensive Curriculum",
    description: "Access a wide range of courses covering everything from basics to advanced topics.",
  },
  {
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: "⚡",
    title: "Hands-On Projects",
    description: "Build real projects to solidify your understanding and showcase your skills.",
  },
  {
    icon: "🏆",
    title: "Certifications",
    description: "Earn recognized certificates to boost your career and validate your expertise.",
  },
  {
    icon: "🌐",
    title: "Global Community",
    description: "Connect with learners worldwide and expand your professional network.",
  },
  {
    icon: "🔄",
    title: "Lifetime Access",
    description: "Once enrolled, enjoy unlimited access to course materials forever.",
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
  { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
  { icon: "📍", label: "Location", value: "San Francisco, CA" },
];

export const FOOTER_SECTIONS = {
  quickLinks: ["About Us", "Courses", "Features", "Contact"],
  resources: ["Blog", "Documentation", "Community", "Support"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const SOCIAL_LINKS = ["𝕏", "in", "f", "ig"];