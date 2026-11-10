const projects = [
    {
        name: 'Workout Tracker Web Application',
        skills: 'Java, Spring Boot, React, TypeScript, PostgreSQL, Flyway, Docker',
        period: 'Aug 2026 - Present',
        link: 'https://github.com/RogerBelman/Workout-Tracker-Webapp',
        linkText: 'GitHub Link',
        liveLink: 'https://workouts.rogerbelman.com',
        description: [
            'Built a full-stack application for strength and cardio logging, reusable workout templates, training goals, and progress charts.',
            'Designed layered Spring REST APIs with DTO validation and JPA relationships for workouts, exercises, and sets; versioned PostgreSQL schemas with Flyway.',
            'Implemented session authentication, BCrypt hashing, email verification, and password recovery; restricted training data to its owner.',
            'Added JSON backup import with validation before transactional replacement, preserving existing records when a backup is invalid.',
            'Tested account isolation, password recovery, and backup workflows with JUnit/MockMvc and Vitest/React Testing Library.',
            'Containerized the frontend and backend and built GitHub Actions pipelines for automated checks, versioned images, deployment approvals, health checks, and rollback.',
        ],
        image: null,
    },
    {
        name: 'Portfolio Website',
        skills: 'React, JavaScript, GitHub Actions, Nginx',
        period: 'Dec 2024 - Present',
        link: 'https://github.com/RogerBelman/Portfolio-Website',
        linkText: 'GitHub Link',
        description: [
            'Built and deployed a responsive React portfolio; automated linting, builds, and production deployment through GitHub Actions with required deployment approval.',
        ],
        image: null,
    },
]

export default projects
