import Component from 'vue'
import WorkPage from '@/pages/work.vue'

describe('Work page', () => {
  test('is a page', () => {
    expect(WorkPage._isVue)
    expect(WorkPage instanceof Component)
  })
})
