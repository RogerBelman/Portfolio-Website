import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const baseUrl = 'https://rogerbelman.com'
const distDir = 'dist'

const routes = [
    {
        path: '/projects',
        title: 'Projects | Roger Belman',
        description: 'Explore software engineering projects by Roger Belman, including React, deployment, and portfolio development work.',
    },
    {
        path: '/experience',
        title: 'Experience | Roger Belman',
        description: "Review Roger Belman's work experience, skills, and professional background.",
    },
]

function replaceTag(html, pattern, replacement) {
    return html.replace(pattern, replacement)
}

function routeHtml(template, route) {
    const url = `${baseUrl}${route.path}`

    return [
        [/<title>.*?<\/title>/, `<title>${route.title}</title>`],
        [/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${route.description}"/>`],
        [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${route.title}" />`],
        [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`],
        [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
        [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${route.title}" />`],
        [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`],
        [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    ].reduce((html, [pattern, replacement]) => replaceTag(html, pattern, replacement), template)
}

const template = await readFile(join(distDir, 'index.html'), 'utf8')

await Promise.all(routes.map(async (route) => {
    const filePath = join(distDir, route.path, 'index.html')
    await mkdir(dirname(filePath), { recursive: true })
    await writeFile(filePath, routeHtml(template, route))
}))
