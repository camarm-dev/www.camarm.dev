import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LegalPageFr from '@/pages/legal/index.vue'
import LegalPageEn from '@/pages/legal/en.vue'

describe('Legal page (french version)', () => {
  test('contains french license', () => {
    const pageContent = mount(LegalPageFr).text()
    expect(pageContent).toContain('This page contain all legal information required by GDPR french rules. It\'s the french version, but a deepl translated one is avaible at')
  })
})

describe('Legal page (english version)', () => {
  test('contains english license', () => {
    const pageContent = mount(LegalPageEn).text()
    expect(pageContent).toContain('This page contain all legal information required by GDPR french rules.')
  })
})
