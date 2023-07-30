function addState (el, state) {
  setTimeout(() => {
    el.classList.add(state || 'active')
  }, 500)
}

function removeState (el, state) {
  setTimeout(() => {
    el.classList.remove(state || 'active')
  }, 500)
}

function scrollTo(el) {
  el.scrollIntoView({ behavior: 'smooth' })
}

function isElementVisible(el) {
  return el.getBoundingClientRect().top <= window.innerHeight
      && el.getBoundingClientRect().bottom >= 0
      && getComputedStyle(el).display !== "none"
}

function watch(elements, trigger = null) {
  if (trigger) {
    if (isElementVisible(trigger)) {
      removeState(elements, 'active')
    } else {
      addState(elements, 'active')
    }
  }
  elements.forEach(el => {
    if (isElementVisible(el)) {
      addState(el, 'active')
    } else {
      removeState(el, 'active')
    }
  })
}

window.addEventListener('load', () => {
  const navbar = document.querySelector('.nav')
  const firstSection = document.querySelector('.landing')
  const data = {
    firstSection: firstSection,
    sections: document.querySelectorAll('.about article'),
    navbar: navbar
  }
  scrollTo(firstSection)
  addState(navbar, 'intro')
  setTimeout(() => { removeState(navbar, 'intro') }, 7000)
  window.addEventListener('beforeunload', () => {
    scrollTo(firstSection)
  })
  window.addEventListener('scroll', () => { watch(data.sections) })
  window.addEventListener('scroll', () => { watch(data.navbar, firstSection) })
})
