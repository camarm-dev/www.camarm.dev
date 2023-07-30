import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatsSection from '@/components/StatsSection.vue'

describe('Statistics section', () => {
  it('shows line of code, commits & repositories count', () => {
    const page = mount(StatsSection, {
      data () {
        return {
          repo_count: 46,
          commit_count: 3045,
          line_count: '1.7+ M'
        }
      },
      mounted () { /* Overwrite function to abort http request */ },
      methods: { /* Overwrite attribute to abort http request */ }
    })
    const statsElements = page.findAll('.stat:not(.word)')
    expect(statsElements).toHaveLength(3)
    expect(statsElements[0].find('h1').text()).toBe('1.7+ M')
    expect(statsElements[1].find('h1').text()).toBe('3045')
    expect(statsElements[2].find('h1').text()).toBe('46')
  })
})
