import { useEffect } from 'react'
import PropTypes from 'prop-types'

const siteName = 'Roger Belman'
const baseUrl = 'https://rogerbelman.com'
const defaultImage = `${baseUrl}/images/profile-preview.jpg`

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

function SEO(props) {
    useEffect(() => {
        const url = `${baseUrl}${props.path}`
        const title = props.title === siteName ? `${siteName} | Portfolio` : `${props.title} | ${siteName}`

        document.title = title
        setCanonical(url)

        setMetaAttribute('meta[name="description"]', ['name', 'description'], props.description)
        setMetaAttribute('meta[property="og:title"]', ['property', 'og:title'], title)
        setMetaAttribute('meta[property="og:description"]', ['property', 'og:description'], props.description)
        setMetaAttribute('meta[property="og:url"]', ['property', 'og:url'], url)
        setMetaAttribute('meta[property="og:type"]', ['property', 'og:type'], 'website')
        setMetaAttribute('meta[property="og:image"]', ['property', 'og:image'], defaultImage)
        setMetaAttribute('meta[property="og:image:alt"]', ['property', 'og:image:alt'], 'Roger Belman portfolio profile photo')
        setMetaAttribute('meta[name="twitter:card"]', ['name', 'twitter:card'], 'summary_large_image')
        setMetaAttribute('meta[name="twitter:title"]', ['name', 'twitter:title'], title)
        setMetaAttribute('meta[name="twitter:description"]', ['name', 'twitter:description'], props.description)
        setMetaAttribute('meta[name="twitter:image"]', ['name', 'twitter:image'], defaultImage)
    }, [props.description, props.path, props.title])

    return null
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default SEO
