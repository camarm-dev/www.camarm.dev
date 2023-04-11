import LogoLarge from '@/components/LogoLarge.vue'
import LineToRight from '@/components/Line-to-right.vue'
import LineToLeft from '@/components/Line-to-left.vue'

describe('Logo large', () => {
  test('is a component', () => {
    expect(LogoLarge._isVue)
  })
})

describe('Line to left', () => {
  test('is a component', () => {
    expect(LineToLeft._isVue)
  })
})

describe('Line to right', () => {
  test('is a component', () => {
    expect(LineToRight._isVue)
  })
})
