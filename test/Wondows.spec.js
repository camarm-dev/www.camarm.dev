import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WTFPage from '@/pages/windows.vue'

describe('Troll page', () => {
  it('shows a troll message', () => {
    const page = mount(WTFPage)
    expect(page.text()).toContain('Did you really searched windows')
  })
})
