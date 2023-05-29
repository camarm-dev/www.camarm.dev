const observerOptions = {
  root: this.$el,
  threshold: 1.0
}
const navbar = document.querySelector('.nav')
const firstSection = document.querySelector('.landing')
const sections = document.querySelectorAll('.about article')

function addState (el, state) {
  el.classList.add(state || 'active')
}

function removeState (el, state) {
  el.classList.remove(state || 'active')
}

function startIntersectionObserver () {
  if (location.pathname !== '/') {
    document.body.classList.add('animated')
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.textContent === firstSection.textContent) {
          removeState(navbar, 'active')
          return
        }
        addState(entry.target, 'active')
      }
      if (!entry.isIntersecting) {
        if (entry.target.textContent === firstSection.textContent) {
          addState(navbar, 'active')
        }
        removeState(entry.target, 'active')
      }
    })
  }, observerOptions)
  observer.observe(firstSection)
  sections.forEach(section => observer.observe(section))
}

startIntersectionObserver()
firstSection.scrollIntoView({ behavior: 'smooth' })
addState(navbar, 'intro')
setTimeout(() => { removeState(navbar, 'intro') }, 7000)
