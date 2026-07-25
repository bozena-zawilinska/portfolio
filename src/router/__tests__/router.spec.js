import { describe, it, expect } from 'vitest'
import router from '../index'
import HomePage from '../../views/HomePage.vue'
import AboutPage from '../../views/AboutPage.vue'
import ContactPage from '../../views/ContactPage.vue'
import WorkPage from '../../views/WorkPage.vue'

describe('router', () => {
  it.each([
    ['/', HomePage],
    ['/about', AboutPage],
    ['/contact', ContactPage],
    ['/work', WorkPage],
  ])('resolves %s to the expected view component', (path, component) => {
    const resolved = router.resolve(path)
    expect(resolved.matched[0].components.default).toBe(component)
  })

  it('redirects /welcome to the home page', () => {
    const resolved = router.resolve('/welcome')
    expect(resolved.redirectedFrom || resolved.path).toBeDefined()
    expect(resolved.matched.some((r) => r.redirect === '/')).toBe(true)
  })

  it('redirects unknown paths to the home page via the catch-all route', () => {
    const resolved = router.resolve('/this-route-does-not-exist')
    expect(resolved.matched.some((r) => r.redirect === '/')).toBe(true)
  })
})
