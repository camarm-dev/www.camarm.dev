import Component from 'vue'
import MainPage from '@/pages/index.vue'

describe('Main page', () => {
  test('is a page', () => {
    expect(MainPage._isVue)
    expect(MainPage instanceof Component)
  })
})
