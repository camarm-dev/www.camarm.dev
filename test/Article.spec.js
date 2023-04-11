import ReadArticlePage from '@/pages/blog/_id.vue'
import Component from 'vue'

describe('Article page', () => {
    test('is a page', () => {
        expect(ReadArticlePage._isVue && typeof ReadArticlePage == Component)
    })
})