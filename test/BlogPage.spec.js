import Component from 'vue'
import BlogPage from '@/pages/blog/index.vue'

describe('Blog page', () => {
  test('is a page', () => {
    expect(BlogPage._isVue)
    expect(BlogPage instanceof Component)
  })
})
