export const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Experience', href: '#experience' },
    // { label: 'Testimonials', href: '#testimonials' },
    // { label: 'Contact', href: '#contact' },
];

export const heroData = {
    greeting: "Hello, I'm",
    name: "Kaleem Ullah",
    roles: ["Full Stack Developer", "React Developer", "Frontend Developer", "Software Engineer"],
    descriptionLines: [
        "Building ",
        { text: "scalable", color: "primary.main" },
        ", ",
        { text: "reliable", color: "secondary.main" },
        ", and ",
        { text: "user-friendly", color: "primary.light" },
        " full-stack web applications that deliver seamless, impactful digital experiences."
    ],
    cta: {
        primary: "Let's Work Together",
        secondary: "View My Work"
    }
};

export const aboutHighlights = [
    {
        title: 'Clean Code',
        description: 'Writing maintainable, scalable code following best practices',
        icon: 'code'
    },
    {
        title: 'Responsive Design',
        description: 'Beautiful interfaces that work seamlessly on all devices',
        icon: 'devices'
    },
    {
        title: 'Performance',
        description: 'Optimized applications for lightning-fast user experiences',
        icon: 'speed'
    },
    {
        title: 'UI/UX Focus',
        description: 'Creating loveable interfaces that users enjoy interacting with',
        icon: 'design'
    },
];

export const skillCategories = [
    {
        category: 'Frontend Development',
        skills: ['React.js', 'Next.js', 'Material-UI', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
    },
    {
        category: 'Backend Development',
        skills: ['Node.js', 'Nest.js', 'Express', 'RESTful APIs', 'GraphQL'],
    },
    {
        category: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
        category: 'AI & Development Tools',
        skills: ['ChatGPT', 'Cursor AI', 'Prompt Engineering', 'OpenAI API'],
    },
];


export const projectsData = [
    {
        title: 'Touchtight',
        description: 'Front-end for a comprehensive football club management platform featuring interactive dashboards, animated drill visualizations, and real-time team analytics. Built with React.js and Material-UI for seamless user experience.',
        image: '/touchtight.jpg',
        tags: ['React.js', 'Material-UI', 'Dashboard', 'Animations', 'Sports Tech'],
        features: [
            'Interactive team management dashboards',
            'Animated drill visualizations',
            'Real-time analytics and reporting',
            'Responsive design for mobile coaches',
        ],
        links: {
            demo: '#',
            github: '#'
        }
    },
    {
        title: 'LiveSmarter',
        description: 'Front-end for an advanced advertisement platform with comprehensive dashboards and analytics tools. Enables users to manage campaigns, track performance metrics, and visualize data with intuitive charts and graphs.',
        image: '/livesmarter.jpg',
        tags: ['Next.js', 'TypeScript', 'Analytics', 'API Integration', 'Dashboard'],
        features: [
            'Campaign management interface',
            'Advanced analytics dashboards',
            'Real-time performance tracking',
            'Data visualization with charts',
        ],
        links: {
            demo: '#',
            github: '#'
        }
    },
];

export const experienceData = [
    {
        title: 'Senior Front-End Developer',
        company: 'Freelance (Upwork)',
        period: '2020 - Present',
        description: 'Delivering high-quality front-end solutions for clients worldwide, specializing in React.js and Next.js applications.',
        achievements: [
            'Built 20+ scalable web applications for diverse clients',
            'Maintained 100% client satisfaction with focus on loveable UIs',
            'Specialized in dashboard development and data visualization',
            'Implemented responsive designs and API integrations',
        ],
    },
    {
        title: 'Front-End Developer',
        company: 'Various Projects',
        period: '2018 - 2020',
        description: 'Focused on creating user-friendly interfaces with modern JavaScript frameworks and UI libraries.',
        achievements: [
            'Developed responsive web applications using React and Vue.js',
            'Collaborated with design teams to implement pixel-perfect UIs',
            'Optimized application performance and user experience',
            'Integrated REST APIs and third-party services',
        ],
    },
];

export const testimonialsData = [
    {
        name: "John Doe",
        role: "CEO at TechCorp",
        content: "Kaleem is an exceptional developer. He delivered the project on time and exceeded our expectations regarding quality and attention to detail.",
        avatar: "/avatars/john.jpg"
    },
    {
        name: "Jane Smith",
        role: "Product Manager at StartupX",
        content: "working with Kaleem was a breeze. His understanding of modern UI/UX principles really made our product stand out.",
        avatar: "/avatars/jane.jpg"
    }
];

export const contactData = {
    email: "kaleem@example.com",
    upwork: "https://www.upwork.com/freelancers/~01...", // Replace with actual profile link
    github: "https://github.com/kaleem-fullstack-dev",
    linkedin: "https://linkedin.com/in/kaleem...",
};
