import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { getRouteTitle, getRouteUrl, prerenderRouteKeys, routeMeta } from '../src/routes/routeMeta.js'

const distDir = 'dist'

function replaceTag(html, pattern, replacement) {
    return html.replace(pattern, replacement)
}

function routeHtml(template, route) {
    const title = getRouteTitle(route)
    const url = getRouteUrl(route)

    return [
        [/<title>.*?<\/title>/, `<title>${title}</title>`],
        [/<meta name="description" content="[^"]*"\/>/, `<meta name="description" content="${route.description}"/>`],
        [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
        [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${route.description}" />`],
        [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
        [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
        [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${route.description}" />`],
        [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    ].reduce((html, [pattern, replacement]) => replaceTag(html, pattern, replacement), template)
}

function outputPath(route) {
    if (route.path === '/') {
        return join(distDir, 'index.html')
    }

    return join(distDir, route.path, 'index.html')
}

const template = await readFile(join(distDir, 'index.html'), 'utf8')

await Promise.all(prerenderRouteKeys.map(async (routeKey) => {
    const route = routeMeta[routeKey]
    const filePath = outputPath(route)
    await mkdir(dirname(filePath), { recursive: true })
    await writeFile(filePath, routeHtml(template, route))
}))
