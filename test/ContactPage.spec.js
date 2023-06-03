import Component from 'vue'
import ContactPage from '@/pages/contact.vue'

describe('ContactPage page', () => {
  test('is a page', () => {
    expect(ContactPage._isVue)
    expect(ContactPage instanceof Component)
  })
})
