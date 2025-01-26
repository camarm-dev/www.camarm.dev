export default function () {
  const items = document.querySelectorAll('.drawer[draggable]')

  let windowClientX = 0, windowClientY = 0

  window.addEventListener('dragover', (event) => {
    windowClientX = event.clientX
    windowClientY = event.clientY
  })

  function moveWithAnimation(target: HTMLElement, dropTarget: HTMLElement) {
    // dropTarget is not null or dnd move direction is left
    const moveDirection = !dropTarget || dropTarget.previousElementSibling === target.nextElementSibling
    const animationTarget = (moveDirection ?
      (dropTarget ? dropTarget.previousElementSibling : target.nextElementSibling) : target.previousElementSibling) as HTMLElement

    // Animation
    animationTarget.style.transform = `translateX(${moveDirection ? '-100%' : '100%'})`
    animationTarget.style.transition = "transform .3s"
    animationTarget.ontransitionend = () => {
      target.parentNode?.insertBefore(target, dropTarget)
      animationTarget.style.transition = ""
      animationTarget.style.transform = ""
      animationTarget.ontransitionend = () => {}
    };
  }

  function itemDragged(e: DragEvent) {
    const clientX = e.clientX || windowClientX
    const clientY = e.clientY || windowClientY
    const target = e.target as HTMLElement

    target.classList.add("dragging")
    let dropTarget = document.elementFromPoint(clientX, clientY) === null ? target : document.elementFromPoint(clientX, clientY) as HTMLElement
    if (target.parentNode === dropTarget.parentNode) {
      dropTarget = dropTarget !== target.nextElementSibling ? dropTarget : dropTarget.nextElementSibling as HTMLElement
      if (target !== dropTarget) {
        // Move target with animation
        moveWithAnimation(target, dropTarget)
      }
    }
  }

  function itemDropped(e: DragEvent) {
    (e.target as HTMLElement).classList.remove("dragging")
    e.preventDefault()
  }

  items.forEach(item => {
    // @ts-expect-error
    item.addEventListener('drag', itemDragged)
    // @ts-expect-error
    item.addEventListener('dragend', itemDropped)
    item.parentElement?.addEventListener('dragover', e => e.preventDefault())
  })
}
