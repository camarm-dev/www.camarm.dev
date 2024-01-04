import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogPage from '@/pages/blog/index.vue'

describe('Blog page', () => {
  it('shows all the blog articles', async () => {
    const articles = await fetch('https://dev.to/api/articles?username=camarm').then(resp => resp.json())
    const page = mount(BlogPage)
    await page.setData({ articles })
    expect(page.vm.$data.articles.length).toBe(articles.length)
  })
})
