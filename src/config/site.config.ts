import { Code, Server, Globe, Smartphone, Database, Cloud, Zap, Shield } from "lucide-react";

export const heroConfig = {
    badge: "Custom Software & Digital Solutions",
    headlines: [
        { text: "INNOVATE", className: "text-white" },
        { text: "BUILD", className: "text-white" },
        { text: "TRANSFORM", className: "text-[#8646F4]" },
    ],
    description:
        "We engineer intelligent, efficient, and future-ready digital solutions that create opportunities and amplify your brand impact.",
    buttons: {
        primary: { label: "Start Your Project" },
        secondary: { label: "Our Services" },
    },
    shapeAnimationDelay: 0.6,
};

export const featuresConfig = {
    label: "What We Do",
    title: "Our Services",
    subtitle: "& Solutions",
    features: [
        {
            icon: Code,
            title: "Custom Development",
            description:
                "Web applications, custom software, and frontend solutions built with modern frameworks and best practices.",
        },
        {
            icon: Server,
            title: "Backend & APIs",
            description:
                "Robust backend systems, REST API development, and seamless integrations for scalable architectures.",
        },
        {
            icon: Database,
            title: "Database Solutions",
            description:
                "Database design, optimization, and integration to ensure your data is structured and accessible.",
        },
        {
            icon: Globe,
            title: "Digital Presence",
            description:
                "Social media management, content strategy, and digital brand presence that amplifies your visibility.",
        },
    ],
};

export const workConfig = {
    label: "Portfolio",
    title: "Featured",
    subtitle: "Projects",
    projects: [
        {
            title: "ENTERPRISE SaaS",
            subtitle: "Web Application",
            image: "/works/1.webp?height=600&width=800",
            year: "2025",
        },
        {
            title: "E-COMMERCE",
            subtitle: "Platform Development",
            image: "/works/2.webp?height=600&width=800",
            year: "2025",
        },
        {
            title: "FINTECH",
            subtitle: "API Integration",
            image: "/works/3.webp?height=600&width=800",
            year: "2024",
        },
        {
            title: "STARTUP MVP",
            subtitle: "Full-Stack Solution",
            image: "/works/4.webp?height=600&width=800",
            year: "2024",
        },
    ],
};

export const processConfig = {
    label: "How We Work",
    title: "Our Process",
    subtitle: "From Idea to Execution",
    steps: [
        {
            number: "01",
            title: "Discovery",
            description:
                "We work closely with you to understand your challenges, translate business goals into technical strategies.",
        },
        {
            number: "02",
            title: "Architecture",
            description:
                "We design scalable system architecture and technical roadmaps aligned with your growth objectives.",
        },
        {
            number: "03",
            title: "Development",
            description:
                "Our team builds secure, high-performance systems using clean code and modern engineering principles.",
        },
        {
            number: "04",
            title: "Integration",
            description:
                "We integrate APIs, databases, and third-party services ensuring seamless connectivity.",
        },
        {
            number: "05",
            title: "Launch & Support",
            description:
                "We deploy cloud-ready solutions and provide ongoing maintenance, optimization, and technical support.",
        },
    ],
};

export const testimonialsConfig = {
    label: "Testimonials",
    title: "What Our Clients",
    subtitle: "Say About Us",
    testimonials: [
        {
            quote:
                "THE xDEVS transformed our outdated systems into a modern, scalable platform. Their technical expertise and collaborative approach made the entire process seamless.",
            author: "James Mitchell",
            role: "CTO, TechVenture Solutions",
        },
        {
            quote:
                "From custom API development to cloud deployment, they delivered exactly what we needed. Their team truly understands how to translate business goals into technical solutions.",
            author: "Priya Sharma",
            role: "Founder, DataFlow Startup",
        },
        {
            quote:
                "Their digital presence management boosted our online visibility significantly. The combination of software development and brand strategy is what sets them apart.",
            author: "Carlos Rodriguez",
            role: "Marketing Director, GrowthHub",
        },
    ],
};

export const pricingConfig = {
    label: "Pricing",
    title: "Flexible Plans",
    subtitle: "For Every Stage",
    plans: [
        {
            name: "Starter",
            description: "For startups and MVPs",
            monthlyPrice: 499,
            annualPrice: 4990,
            features: [
                "Custom website development",
                "Responsive design",
                "Basic API integration",
                "Database setup",
                "30-day support",
            ],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Growth",
            description: "For scaling businesses",
            monthlyPrice: 999,
            annualPrice: 9990,
            features: [
                "Everything in Starter",
                "Full-stack web application",
                "Custom REST API development",
                "Cloud-ready architecture",
                "Social media management",
                "90-day support",
            ],
            cta: "Get Started",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "For large-scale systems",
            monthlyPrice: 2499,
            annualPrice: 24990,
            features: [
                "Everything in Growth",
                "System design & architecture",
                "Advanced integrations",
                "Performance optimization",
                "Digital brand strategy",
                "Priority support",
                "Dedicated account manager",
            ],
            cta: "Contact Us",
            popular: false,
        },
    ],
};

export const contactConfig = {
    label: "Contact",
    title: "Let's Build",
    subtitle: "Together",
    info: {
        email: "thexdevs.co@gmail.com",
        phone: "+1 (555) 123-4567",
        address: {
            street: "Innovation Hub",
            city: "Tech District",
            country: "Ready to serve globally",
        },
    },
};
