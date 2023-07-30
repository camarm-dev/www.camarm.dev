import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import WorkPage from '@/pages/work.vue'

describe('Work page', () => {
  it('shows my work', () => {
    const page = shallowMount(WorkPage)
    expect(page.text()).toContain('Work ☕')
  })
})
