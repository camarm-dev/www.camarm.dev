import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MainPage from '@/pages/index.vue'

describe('Index page', () => {
  const page = mount(MainPage)
  it('shows the landing section', () => {
    const landingSection = page.find('.landing')
    expect(landingSection).not.toBeNull()
  })
  it('shows the about section', () => {
    const aboutSection = page.find('.about')
    expect(aboutSection).not.toBeNull()
  })
})
