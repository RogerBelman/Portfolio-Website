const projects = [
    {
        name: 'Workout Tracker Web Application',
        skills: 'Java, Spring Boot, React, TypeScript, PostgreSQL, Spring Data JPA, Neon, Docker, Flyway, REST APIs, JUnit, Mockito, MockMvc',
        period: 'Aug 2026 - Present',
        link: null,
        description: [
            'Built a full-stack workout tracking application with a React/TypeScript frontend, Spring Boot REST API, and PostgreSQL database for exercise management, workout logging, history, and progress analytics.',
            'Designed a layered controller-service-repository backend with DTO-based API contracts, request validation, centralized exception handling, and Spring Data JPA persistence.',
            'Modeled relational workout, exercise, and set data in PostgreSQL; managed versioned schema migrations with Flyway and configured Docker Compose and Neon database environments.',
            'Implemented and tested total workout volume, personal records, and exercise progress history using JUnit, MockMvc, Mockito, and service and mapper tests.',
        ],
        image: null,
    },
    {
        name: 'AB Drywall Systems LLC Website',
        skills: 'React, JavaScript, HTML/CSS, React Router, SEO, Vite, Nginx, DigitalOcean, Ubuntu',
        period: 'Jan 2026 - Present',
        link: 'https://www.abdrywallsystemsllc.com/',
        linkText: 'Visit Website',
        description: [
            'Built and deployed a responsive production website for a Dallas-Fort Worth construction company using React, React Router, JavaScript, and Vite.',
            'Developed interactive project galleries with responsive image layouts, keyboard-accessible controls, lazy-loaded WebP assets, and reusable content-driven components.',
            'Implemented technical SEO with route-specific metadata, canonical URLs, social sharing metadata, JSON-LD structured data, robots directives, and sitemap support.',
            'Configured an Ubuntu VPS with Nginx and HTTPS, including canonical redirects, direct-route handling, custom 404 behavior, and production caching policies.',
        ],
        image: null,
    },
    {
        name: 'Portfolio Website',
        skills: 'React, JavaScript, React Router, Vite, Nginx, DigitalOcean, Ubuntu, HTTPS',
        period: 'Dec 2024 - Present',
        link: 'https://github.com/RogerBelman/Portfolio-Website.git',
        linkText: 'GitHub Link',
        description: [
            'Built and deployed a responsive personal portfolio showcasing software projects, professional experience, and resume content using React and React Router.',
            'Used GitHub for version control and VS Code for development.',
            'Deployed to an Ubuntu DigitalOcean VPS at rogerbelman.com with Nginx and HTTPS.',
        ],
        image: null,
    },
]

export default projects
