import Component from 'vue'
import WTFPage from '@/pages/windows.vue'

describe('Troll page', () => {
  test('is a page', () => {
    expect(WTFPage._isVue)
    expect(WTFPage instanceof Component)
  })
})
