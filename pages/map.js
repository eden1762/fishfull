function initFilters() {
  const buttons = Array.from(document.querySelectorAll('.filter-btn'))
  const cards = Array.from(document.querySelectorAll('.location-card'))
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.getAttribute('data-filter') || 'all'
      buttons.forEach((item) => item.classList.toggle('active', item === button))
      cards.forEach((card) => {
        const category = card.getAttribute('data-category')
        card.classList.toggle('is-hidden', selected !== 'all' && selected !== category)
      })
    })
  })
}

initFilters()
