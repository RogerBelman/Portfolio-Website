const projects = [
    {
        name: 'Workout Tracker Web Application',
        skills: 'Java, Spring Boot, React, TypeScript, PostgreSQL, Docker',
        period: 'Aug 2026 - Present',
        link: 'https://github.com/RogerBelman/Workout-Tracker-Webapp',
        linkText: 'GitHub Link',
        description: [
            'Built a full-stack workout tracker with strength and cardio logging, reusable workout templates, training goals, and progress analytics.',
            'Designed a layered Spring Boot REST API with request validation, Spring Data JPA, and versioned PostgreSQL migrations using Flyway.',
            'Added session authentication, email verification, password recovery, and per-user data access with Spring Security.',
            'Tested backend and frontend workflows and automated container releases through GitHub Actions, with deployment approval, health checks, and rollback.',
        ],
        image: null,
    },
    {
        name: 'AB Drywall Systems LLC Website',
        skills: 'React, JavaScript, Vite, Nginx',
        period: 'Jan 2026 - Present',
        link: 'https://www.abdrywallsystemsllc.com/',
        linkText: 'Visit Website',
        description: [
            'Built a responsive production website for a Dallas-Fort Worth construction company using reusable React components.',
            'Created project galleries with keyboard-accessible controls, responsive layouts, and lazy-loaded WebP images.',
            'Implemented route-specific SEO, structured data, and sitemap support; deployed on DigitalOcean with Nginx, HTTPS, and production caching.',
        ],
        image: null,
    },
    {
        name: 'Portfolio Website',
        skills: 'React, Vite, GitHub Actions, DigitalOcean',
        period: 'Dec 2024 - Present',
        link: 'https://github.com/RogerBelman/Portfolio-Website.git',
        linkText: 'GitHub Link',
        description: [
            'Built a responsive React portfolio to showcase projects, professional experience, and my resume, with route-specific SEO and social sharing metadata.',
            'Automated validation, builds, and approval-gated deployment through GitHub Actions; hosted on DigitalOcean with Nginx and HTTPS.',
        ],
        image: null,
    },
]

export default projects
