import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReadArticlePage from '@/pages/blog/[id].vue'

describe('Article page', () => {
  const page = mount(ReadArticlePage)
  it('shows an article in reading mode', () => {
    const readingDivElement = page.find('div.reading')
    expect(readingDivElement).not.toBeNull()
  })
})
