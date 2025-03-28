import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AcknowledgementsSection from '~/components/FooterSection.vue'

describe('AcknowledgementsSection section', () => {
  const page = mount(AcknowledgementsSection)
  it('shows credits & licence link', () => {
    expect(page.text()).toContain('license')
    expect(page.text()).toContain('by @camarm for CAMARM Inc.')
  })
  it('shows a link to kuma status page', () => {
    const anchor = page.find('a [href=https://uptime.camarm.fr]')
    expect(anchor).not.toBeNull()
  })
})
