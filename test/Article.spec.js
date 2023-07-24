
import Component from 'vue'
import ReadArticlePage from '~/pages/blog/[id].vue'

describe('Article page', () => {
  test('is a page', () => {
    expect(ReadArticlePage._isVue)
    expect(ReadArticlePage instanceof Component)
  })
})
