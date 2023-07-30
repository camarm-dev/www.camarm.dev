import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('Navbar', () => {
  const page = mount(NavBar)
  it('shows the link to the 4 pages', () => {
    const items = page.findAll('.items-stacked .item:not(.square)')
    expect(items).toHaveLength(4)
  })

  it('shows the email, github and gitlab buttons', () => {
    const emailButton = page.find('.item.square.ml')
    const githubButton = page.find('.item.square.gh')
    const gitlabButton = page.find('.item.square.gl')

    expect(emailButton).not.toBeNull()
    expect(githubButton).not.toBeNull()
    expect(gitlabButton).not.toBeNull()
  })
})
