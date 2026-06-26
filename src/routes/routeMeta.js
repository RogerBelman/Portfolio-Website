export const siteName = 'Roger Belman'
export const baseUrl = 'https://rogerbelman.com'
export const defaultImage = `${baseUrl}/images/profile-preview.jpg`

export const routeMeta = {
    profile: {
        path: '/',
        title: siteName,
        description: 'Roger Belman is a software engineering student at The University of Texas at Dallas building practical web applications with React and modern development tools.',
    },
    projects: {
        path: '/projects',
        title: 'Projects',
        description: 'Explore software engineering projects by Roger Belman, including React, deployment, and portfolio development work.',
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
