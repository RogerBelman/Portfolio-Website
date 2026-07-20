export const siteName = 'Roger Belman'
export const baseUrl = 'https://rogerbelman.com'
export const defaultImage = `${baseUrl}/images/profile-preview.jpg`

export const routeMeta = {
    profile: {
        path: '/',
        title: siteName,
        description: 'Roger Belman is a software engineering graduate from The University of Texas at Dallas focused on React websites, maintainable software, SEO, and deployment.',
    },
    projects: {
        path: '/projects',
        title: 'Projects',
        description: 'Explore software engineering projects by Roger Belman, including React websites, technical SEO, deployment, and machine learning capstone work.',
    },
    experience: {
        path: '/experience',
        title: 'Experience',
        description: "Review Roger Belman's work experience, skills, and professional background.",
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
