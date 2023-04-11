import WTFPage from '@/pages/windows.vue'
import Component from 'vue'

describe('Troll page', () => {
    test('is a page', () => {
        expect(WTFPage._isVue && typeof WTFPage == Component)   
    })
})