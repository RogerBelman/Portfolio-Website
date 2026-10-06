export const siteName = 'Roger Belman'
export const baseUrl = 'https://rogerbelman.com'
export const defaultImage = `${baseUrl}/images/profile-preview.jpg`

export const routeMeta = {
    profile: {
        path: '/',
        title: siteName,
        description: 'Roger Belman is a UT Dallas software engineering graduate building full-stack applications with Java, Spring Boot, React, TypeScript, and PostgreSQL.',
        lastmod: '2026-10-05',
        changefreq: 'monthly',
        priority: '1.0',
    },
    projects: {
        path: '/projects',
        title: 'Projects',
        description: 'Explore Roger Belman\'s projects, including a full-stack workout tracker with Spring Boot and PostgreSQL, a business website, and a React portfolio.',
        lastmod: '2026-10-05',
        changefreq: 'monthly',
        priority: '0.8',
    },
    experience: {
        path: '/experience',
        title: 'Experience',
        description: "Review Roger Belman's experience as a web developer at AB Drywall Systems LLC, including production website maintenance and Ubuntu VPS deployment.",
        lastmod: '2026-10-05',
        changefreq: 'monthly',
        priority: '0.8',
    },
    notFound: {
        path: '/404',
        title: 'Page Not Found',
        description: "The requested page could not be found on Roger Belman's portfolio.",
        noindex: true,
    },
}

export const prerenderRouteKeys = ['profile', 'projects', 'experience']

export function getRouteTitle(route) {
    return route.title === siteName ? `${siteName} | Portfolio` : `${route.title} | ${siteName}`
}

export function getRouteUrl(route) {
    return `${baseUrl}${route.path}`
}
