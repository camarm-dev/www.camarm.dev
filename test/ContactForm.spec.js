import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm', () => {
  it('can be filled', () => {
    const page = mount(ContactForm)
    const inputs = page.findAll('input')
    const email = inputs[0]
    const fullname = inputs[1]
    const subject = inputs[2]
    const content = page.find('textarea')
    email.setValue('john@doe.com')
    fullname.setValue('John Doe')
    subject.setValue('Unit tests')
    content.setValue('Unit tests article content')

    expect(email.element.value).toBe('john@doe.com')
    expect(fullname.element.value).toBe('John Doe')
    expect(subject.element.value).toBe('Unit tests')
    expect(content.element.value).toBe('Unit tests article content')
  })
})
