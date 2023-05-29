import fs from 'fs'

describe('Work (portfolio) section', () => {
  test('has datas to show', () => {
    expect(fs.existsSync('assets/data/projects.json'))
  })
})
