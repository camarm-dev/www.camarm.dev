export default function () {
  const items = document.querySelectorAll('.techno')
  let selectedItem: HTMLElement | undefined
  let isDown = false

  window.addEventListener('mousedown', () => isDown = true)
  window.addEventListener('mouseup', () => isDown = false)

  let clientX = 0, clientY = 0;

  (document.querySelector('.techno-jail') as HTMLElement).addEventListener('mousemove', (event: MouseEvent) => {
    if (selectedItem) {
      const rect = (document.querySelector('.techno-jail') as HTMLElement).getBoundingClientRect()
      clientX = event.clientX - rect.left;
      clientY = event.clientY - rect.top;
      // Item will get out of the box
      if ((clientY -  20) <= 0 || (clientY + 20) >= (rect.bottom - rect.top) || (clientX - 20) <= 0 || (clientX + 20) >= (rect.right - rect.left)) return
      selectedItem.style.left = clientX - 20 + 'px';
      selectedItem.style.top = clientY - 20 + 'px';
    }
  })

  items.forEach(item => {
    (item as HTMLElement).addEventListener('mousedown', () => {
      item.classList.add('moving')
      selectedItem = item as HTMLElement
    });
    (item as HTMLElement).addEventListener('mouseup', () => {
      item.classList.remove('moving')
      selectedItem = undefined
    });
    const rect = (document.querySelector('.techno-jail') as HTMLElement).getBoundingClientRect();
    const left = Math.random() * (rect.right - rect.left);
    const top = Math.random() * (rect.bottom - rect.top);
    (item as HTMLElement).style.left = (left >= (rect.width - 40) ? left - 40 : left) + 'px';
    (item as HTMLElement).style.top = (top >= (rect.height - 40) ? top - 40 : top) + 'px';
  })
}
