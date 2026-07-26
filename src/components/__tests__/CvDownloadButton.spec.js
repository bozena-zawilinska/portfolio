import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CvDownloadButton from '../CvDownloadButton.vue'

describe('CvDownloadButton', () => {
  it('renders the default label', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.text()).toContain('Download CV')
  })

  it('renders an anchor through BaseButton', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.element.tagName).toBe('A')
  })

  it('builds the href from process.env.BASE_URL', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.attributes('href')).toBe(
      `${process.env.BASE_URL}assets/documents/Bozena_Zawilinska_Front_End_Engineer_CV.pdf`
    )
  })

  it('sets the native download attribute with the correct filename', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.attributes('download')).toBe(
      'Bozena_Zawilinska_Front_End_Engineer_CV.pdf'
    )
  })

  it('has an accessible label naming the document and file type', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.attributes('aria-label')).toBe(
      "Download Bozena Zawilinska's Front-End Engineer CV as a PDF"
    )
  })

  it('does not open a new tab', () => {
    const wrapper = mount(CvDownloadButton)
    expect(wrapper.attributes('target')).toBeUndefined()
  })

  it('passes variant, size and fullWidth through to BaseButton', () => {
    const wrapper = mount(CvDownloadButton, {
      props: { variant: 'primary', size: 'small', fullWidth: true },
    })
    expect(wrapper.classes()).toContain('btn--primary')
    expect(wrapper.classes()).toContain('btn--small')
    expect(wrapper.classes()).toContain('btn--full-width')
  })

  it('renders a custom label when provided', () => {
    const wrapper = mount(CvDownloadButton, {
      props: { label: 'Get my CV' },
    })
    expect(wrapper.text()).toContain('Get my CV')
  })

  it('passes additional attributes through to BaseButton', () => {
    const wrapper = mount(CvDownloadButton, {
      attrs: { 'data-testid': 'cv-download' },
    })
    expect(wrapper.attributes('data-testid')).toBe('cv-download')
  })
})
