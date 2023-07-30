import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReadArticle from '@/components/ReadArticle.vue'

describe('Read article component', () => {
  const page = mount(ReadArticle, { props: { articleData: { body_html: 'Hello blog, hello Dev.to and welcome to you !', cover_image: '' } } })
  it('can load an article content', () => {
    const content = page.find('.content').text()
    expect(content).toBe('Hello blog, hello Dev.to and welcome to you !')
  })
})
