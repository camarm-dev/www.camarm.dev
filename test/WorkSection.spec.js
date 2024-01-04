import fs from 'node:fs'
import { describe, it, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorkPage from '@/components/WorkSection.vue'

describe('Work (portfolio) section', () => {
  test('has datas to show', () => {
    expect(fs.existsSync('assets/data/projects.json'))
  })

  it('shows given work from data', () => {
    const page = mount(WorkPage)
    const workCards = page.findAll('.drawer')
    expect(workCards.length).toBeGreaterThanOrEqual(3)
  })
})
