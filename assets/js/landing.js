const observerOptions = {
  root: document.body
}
const navbar = document.querySelector('.nav')
const firstSection = document.querySelector('.landing')

function addState(el,state) {
 el.classList.add(state || 'active')
}

function removeState(el,state) {
 el.classList.remove(state || 'active')
}

function handleIntersectionObserver(entries, observer) {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting && entry.target.textContent === navbar.textContent) {
      removeState(navbar, 'active')
    }
    if (!entry.isIntersecting) {
      addState(navbar, 'active')
    }
  })
}

function startIntersectionObserver() {
  let observer = new IntersectionObserver(handleIntersectionObserver, observerOptions)
  observer.observe(firstSection)
}

startIntersectionObserver()
firstSection.scrollIntoView({ behavior: "smooth" })
addState(navbar, 'intro')
setTimeout(() => { removeState(navbar, 'intro') }, 7000)
