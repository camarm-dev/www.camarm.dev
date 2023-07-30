import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutSection from '@/components/AboutSection.vue'

describe('About section', () => {
  const page = mount(AboutSection).text()
  it('says welcome', () => {
    expect(page).toContain('Welcome !')
  })
  it('describes my objectives', () => {
    expect(page).toContain('My objectives')
  })
  it('describes my engagements', () => {
    expect(page).toContain('My engagements')
  })
  it('describes my skills', () => {
    expect(page).toContain('Skills')
  })
  it('describes my experiences', () => {
    expect(page).toContain('Experiences')
  })
})
