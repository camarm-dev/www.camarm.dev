import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCard from '@/components/ArticleCard.vue'

describe('Article card', () => {
  it('describe a blog article', () => {
    const page = mount(ArticleCard, { props: { articleData: { } } })
    const title = page.find('.title')
    const description = page.find('.content')
    expect(title).not.toBeNull()
    expect(description).not.toBeNull()
  })
})
