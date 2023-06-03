import fs from 'fs'
import WorkPage from '@/components/WorkSection.vue'

describe('Work (portfolio) section', () => {
  test('has datas to show', () => {
    expect(fs.existsSync('assets/data/projects.json'))
  })

  test('is a component', () => {
    expect(WorkPage._isVue)
  })
})
