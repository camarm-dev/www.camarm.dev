import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LandingSection from '@/components/LandingSection.vue'

describe('Landing section', () => {
  const page = mount(LandingSection)
  it('says hello', () => {
    expect(page.text()).toContain('Hey 👋')
  })

  it('shows my face', () => {
    const image = page.find('.image img')
    expect(image).not.toBeNull()
  })
})
