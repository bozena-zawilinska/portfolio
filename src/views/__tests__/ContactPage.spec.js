import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ContactPage from '../ContactPage.vue'

function makeWrapper() {
  return shallowMount(ContactPage, {
    global: {
      stubs: {
        TypingAnimation: true,
        BaseButton: true,
        BackgroundShades: true,
        ScrollToTopButton: true,
        ProgressBar: true,
      },
    },
  })
}

describe('ContactPage form validation', () => {
  it('rejects an empty form and reports the first missing field', () => {
    const wrapper = makeWrapper()
    expect(wrapper.vm.validateForm()).toBe(false)
    expect(wrapper.vm.validationErrors.name).toBe('Name is required')
  })

  it('rejects a malformed email address', () => {
    const wrapper = makeWrapper()
    wrapper.vm.form.name = 'Ada Lovelace'
    wrapper.vm.form.email = 'not-an-email'
    expect(wrapper.vm.validateForm()).toBe(false)
    expect(wrapper.vm.validationErrors.email).toBe(
      'Please enter a valid email address'
    )
  })

  it('rejects a message shorter than 10 characters', () => {
    const wrapper = makeWrapper()
    wrapper.vm.form.name = 'Ada Lovelace'
    wrapper.vm.form.email = 'ada@example.com'
    wrapper.vm.form.subject = 'Hello'
    wrapper.vm.form.message = 'too short'
    expect(wrapper.vm.validateForm()).toBe(false)
    expect(wrapper.vm.validationErrors.message).toContain('at least 10')
  })

  it('accepts a fully valid form', () => {
    const wrapper = makeWrapper()
    wrapper.vm.form.name = 'Ada Lovelace'
    wrapper.vm.form.email = 'ada@example.com'
    wrapper.vm.form.subject = 'Project inquiry'
    wrapper.vm.form.message = 'This message is long enough to pass.'
    expect(wrapper.vm.validateForm()).toBe(true)
  })
})
