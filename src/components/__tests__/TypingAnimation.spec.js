import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TypingAnimation from '../TypingAnimation.vue'

describe('TypingAnimation', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('sets aria-label to the full text immediately, so screen readers are not read char-by-char', () => {
    const wrapper = mount(TypingAnimation, {
      props: { text: "Hello, I'm Bozena!" },
    })
    expect(wrapper.find('span').attributes('aria-label')).toBe(
      "Hello, I'm Bozena!"
    )
  })

  it('emits typingFinished once the full text has been typed out', async () => {
    const wrapper = mount(TypingAnimation, {
      props: { text: 'Hi', speed: 10 },
    })

    await vi.advanceTimersByTimeAsync(10 * 'Hi'.length + 10)

    expect(wrapper.emitted('typingFinished')).toBeTruthy()
    expect(wrapper.text()).toContain('Hi')
  })
})
