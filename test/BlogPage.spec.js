import BlogPage from '@/pages/blog/index.vue'
import Component from 'vue'

describe('Blog page', () => {
    test('is a page', () => {
        expect(BlogPage._isVue && typeof BlogPage == Component)
    })
})