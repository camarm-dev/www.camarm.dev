import fs from 'node:fs'
import { describe, it, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorkPage from '@/components/WorkSection.vue'

describe('Work (portfolio) section', () => {
  test('has datas to show', () => {
    expect(fs.existsSync('assets/data/projects.json'))
  })

  test('has required images (specified in data file)', () => {
    const data = JSON.parse(fs.readFileSync('assets/data/projects.json'))
    data.projects.forEach((project) => {
      expect(fs.existsSync(project.images.default))
      expect(fs.existsSync(project.images.alternative))
    })
  })

  it('shows given work from data', () => {
    const page = mount(WorkPage)
    const workCards = page.findAll('.card')
    expect(workCards.length).toBeGreaterThanOrEqual(3)
  })
})
