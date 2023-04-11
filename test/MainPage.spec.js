import MainPage from '@/pages/index.vue'
import Component from 'vue'

describe('Main page', () => {
    test('is a page', () => {
        expect(MainPage._isVue && typeof MainPage == Component)
    })
})