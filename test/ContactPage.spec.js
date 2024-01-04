import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactPage from '@/pages/contact.vue'

describe('ContactPage page', () => {
  const page = mount(ContactPage)
  it('shows a contact form', () => {
    const form = page.find('form.contact')
    expect(form).not.toBeNull()
  })
})
