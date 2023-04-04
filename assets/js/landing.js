const observerOptions = {
  root: document.body,
  rootMargin: "0px",
  threshold: 1.0,
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
    } else if (!entry.isIntersecting) {
      addState(navbar, 'active')
    }
  })
}

function startIntersectionObserver() {
  const observer = new IntersectionObserver(handleIntersectionObserver, observerOptions)
  observer.observe(firstSection)
  return observer
}

startIntersectionObserver()
