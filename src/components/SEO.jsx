import { useEffect } from 'react'
import { defaultImage, getRouteTitle, getRouteUrl, routeMeta } from '../routes/routeMeta.js'

function setMetaAttribute(selector, attribute, value) {
    let element = document.head.querySelector(selector)

    if (!element) {
        element = document.createElement('meta')
        document.head.appendChild(element)
    }

    const [name, content] = attribute
    element.setAttribute(name, content)
    element.setAttribute('content', value)
}

function setCanonical(url) {
    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', url)
}

function SEO({ routeKey }) {
    useEffect(() => {
        const route = routeMeta[routeKey]
        const url = getRouteUrl(route)
        const title = getRouteTitle(route)

        document.title = title
        setCanonical(url)

        setMetaAttribute('meta[name="description"]', ['name', 'description'], route.description)
        setMetaAttribute('meta[property="og:title"]', ['property', 'og:title'], title)
        setMetaAttribute('meta[property="og:description"]', ['property', 'og:description'], route.description)
        setMetaAttribute('meta[property="og:url"]', ['property', 'og:url'], url)
        setMetaAttribute('meta[property="og:type"]', ['property', 'og:type'], 'website')
        setMetaAttribute('meta[property="og:image"]', ['property', 'og:image'], defaultImage)
        setMetaAttribute('meta[property="og:image:alt"]', ['property', 'og:image:alt'], 'Roger Belman portfolio profile photo')
        setMetaAttribute('meta[name="twitter:card"]', ['name', 'twitter:card'], 'summary_large_image')
        setMetaAttribute('meta[name="twitter:title"]', ['name', 'twitter:title'], title)
        setMetaAttribute('meta[name="twitter:description"]', ['name', 'twitter:description'], route.description)
        setMetaAttribute('meta[name="twitter:image"]', ['name', 'twitter:image'], defaultImage)
        setMetaAttribute('meta[name="robots"]', ['name', 'robots'], route.noindex ? 'noindex, nofollow' : 'index, follow')
    }, [routeKey])

    return null
}

SEO.propTypes = {
    routeKey(props, propName, componentName) {
        if (Object.prototype.hasOwnProperty.call(routeMeta, props[propName])) {
            return null
        }

        return new Error(`${componentName} requires a valid routeKey.`)
    },
}

export default SEO
