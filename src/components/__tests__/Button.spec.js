import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button (polymorphic tag)', () => {
  it('renders a native <button> when neither to nor href is given', () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders an <a> when href is given', () => {
    const wrapper = mount(Button, {
      props: { href: 'https://example.com' },
      slots: { default: 'Visit' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('renders a router-link when to is given', () => {
    const wrapper = mount(Button, {
      props: { to: '/about' },
      slots: { default: 'About' },
      global: {
        stubs: {
          'router-link': { template: '<a><slot /></a>' },
        },
      },
    })
    expect(wrapper.element.tagName).toBe('A')
  })

  it('emits click for a native button', async () => {
    const wrapper = mount(Button, { slots: { default: 'Click me' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
