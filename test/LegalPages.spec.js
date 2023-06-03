import Component from 'vue'
import LegalPageFr from '@/pages/legal/index.vue'
import LegalPageEn from '@/pages/legal/en.vue'

describe('LegalFr page', () => {
  test('is a page', () => {
    expect(LegalPageFr._isVue)
    expect(LegalPageFr instanceof Component)
  })
})

describe('LegalEn page', () => {
  test('is a page', () => {
    expect(LegalPageEn._isVue)
    expect(LegalPageEn instanceof Component)
  })
})
