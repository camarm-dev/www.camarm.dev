import fs from 'node:fs'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LogoLarge from '@/components/LogoLarge.vue'

describe('Logo', () => {
  test('is a vector', () => {
    const page = mount(LogoLarge)
    const vector = page.findAll('svg')
    expect(vector).toHaveLength(1)
  })
})

describe('Other assets used', () => {
  test('are in the assets or public folder', () => {
    expect(fs.existsSync('public/icon.png'))
    expect(fs.existsSync('public/favicon.ico'))
    expect(fs.existsSync('assets/images/profil-armand.png'))
    expect(fs.existsSync('assets/images/profil-camarm.png'))
  })
})
