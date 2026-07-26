const SITE_URL = 'https://bozena-zawilinska.github.io/portfolio'

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonicalLink(href) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets the document title and upserts description/canonical/Open Graph
 * meta tags for the current route. Vue 3 has no built-in head-management
 * plugin registered in this app, so this is a small hand-rolled
 * replacement rather than a new dependency for four routes.
 */
export function setDocumentMeta({ title, description, path }) {
  if (title) {
    document.title = title
    upsertMeta('property', 'og:title', title)
  }

  if (description) {
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:description', description)
  }

  upsertMeta('property', 'og:type', 'website')

  if (path !== undefined) {
    const canonicalUrl = `${SITE_URL}${path}`
    upsertCanonicalLink(canonicalUrl)
    upsertMeta('property', 'og:url', canonicalUrl)
  }
}
