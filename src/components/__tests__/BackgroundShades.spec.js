import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BackgroundShades from '../BackgroundShades.vue'

describe('BackgroundShades', () => {
  it('renders a shade for each show* prop enabled by default', () => {
    const wrapper = mount(BackgroundShades)
    expect(wrapper.findAll('.shade--primary')).toHaveLength(1)
    expect(wrapper.findAll('.shade--secondary')).toHaveLength(1)
    expect(wrapper.findAll('.shade--tertiary')).toHaveLength(0)
  })

  it('renders the tertiary shade when show-tertiary is true', () => {
    const wrapper = mount(BackgroundShades, {
      props: { showTertiary: true },
    })
    expect(wrapper.findAll('.shade--tertiary')).toHaveLength(1)
  })

  it('hides shades whose show* prop is false', () => {
    const wrapper = mount(BackgroundShades, {
      props: { showPrimary: false, showSecondary: false },
    })
    expect(wrapper.findAll('.shade--primary')).toHaveLength(0)
    expect(wrapper.findAll('.shade--secondary')).toHaveLength(0)
  })

  it('marks the root as aria-hidden since it is purely decorative', () => {
    const wrapper = mount(BackgroundShades)
    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('accepts the aqua color variant added for the water theme', () => {
    const wrapper = mount(BackgroundShades, {
      props: { primaryColor: 'aqua' },
    })
    expect(wrapper.find('.shade--aqua').exists()).toBe(true)
  })
})
