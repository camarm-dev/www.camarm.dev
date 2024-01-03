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

function scrollTo(el, block = 'start') {
  el.scrollIntoView({ behavior: 'smooth', block: block })
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
    scrollTo(data.sections[0])
  })
  document.getElementById('to-top').addEventListener('click', () => {
    scrollTo(data.sections[0])
    setTimeout(()=> { scrollTo(firstSection) }, 200)
  })
})
