export const siteName = 'Roger Belman'
export const baseUrl = 'https://rogerbelman.com'
export const defaultImage = `${baseUrl}/images/profile-preview.jpg`

export const routeMeta = {
    profile: {
        path: '/',
        title: siteName,
        description: 'Roger Belman builds full-stack applications and responsive websites with a focus on reliable software and clear user experiences.',
        lastmod: '2026-11-09',
        changefreq: 'monthly',
        priority: '1.0',
    },
    projects: {
        path: '/projects',
        title: 'Projects',
        description: 'Explore Roger Belman\'s full-stack workout tracker with authentication, progress charts, and validated backups, and a React portfolio with GitHub Actions CI/CD.',
        lastmod: '2026-11-09',
        changefreq: 'monthly',
        priority: '0.8',
    },
    experience: {
        path: '/experience',
        title: 'Experience',
        description: "Review Roger Belman's web development at AB Drywall Systems LLC: responsive React pages, accessible galleries, SEO, and GitHub Actions CI/CD with approved releases.",
        lastmod: '2026-11-09',
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
