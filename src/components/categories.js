import { categories } from '../data/content.js'
import { openDrawer } from './drawer.js'

export function renderCategories(container) {
  // Build category bar
  const bar = document.createElement('div')
  bar.className = 'category-bar'
  bar.setAttribute('role', 'tablist')
  bar.setAttribute('aria-label', 'Kategorie tematyczne')

  // Single shared subtopics panel (renders below the whole bar)
  const panel = document.createElement('div')
  panel.className = 'subtopics-panel'
  panel.setAttribute('role', 'tabpanel')

  let activeId = null

  categories.forEach((cat, catIndex) => {
    const btn = document.createElement('button')
    btn.className = 'category-btn reveal'
    btn.style.setProperty('--delay', `${catIndex * 100}ms`)
    btn.setAttribute('type', 'button')
    btn.setAttribute('role', 'tab')
    btn.setAttribute('aria-expanded', 'false')
    btn.setAttribute('aria-controls', `subtopics-${cat.id}`)
    btn.setAttribute('id', `cat-${cat.id}`)
    btn.dataset.catId = cat.id

    btn.innerHTML = `
      <span class="category-btn__icon" aria-hidden="true">${cat.icon}</span>
      <span class="category-btn__name">${cat.label}</span>
      <span class="category-btn__count">${cat.subtopics.length} ${cat.subtopics.length === 1 ? 'temat' : 'tematy/ów'}</span>
      <span class="category-btn__indicator" aria-hidden="true"></span>
    `

    btn.addEventListener('click', () => {
      const isAlreadyOpen = activeId === cat.id

      // Reset all buttons
      bar.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('is-open')
        b.setAttribute('aria-expanded', 'false')
      })

      if (isAlreadyOpen) {
        panel.classList.remove('is-open')
        activeId = null
      } else {
        btn.classList.add('is-open')
        btn.setAttribute('aria-expanded', 'true')
        activeId = cat.id
        renderSubtopics(panel, cat)
        panel.classList.add('is-open')
      }
    })

    bar.appendChild(btn)
  })

  container.appendChild(bar)
  container.appendChild(panel)

  // Auto-open first category (Filozofia)
  const firstCat = categories[0]
  const firstBtn = bar.querySelector('.category-btn')
  firstBtn.classList.add('is-open')
  firstBtn.setAttribute('aria-expanded', 'true')
  activeId = firstCat.id
  renderSubtopics(panel, firstCat)
  panel.classList.add('is-open')

  // Init reveal observer for category buttons
  initRevealObserver(bar.querySelectorAll('.category-btn'))
}

function renderSubtopics(panel, cat) {
  panel.innerHTML = ''

  const grid = document.createElement('div')
  grid.className = 'subtopics-grid'
  grid.setAttribute('id', `subtopics-${cat.id}`)
  grid.setAttribute('aria-labelledby', `cat-${cat.id}`)

  cat.subtopics.forEach((sub, i) => {
    const tile = document.createElement('div')
    tile.className = 'subtopic-tile'
    tile.style.setProperty('--delay', `${i * 60}ms`)
    tile.setAttribute('role', 'button')
    tile.setAttribute('tabindex', '0')
    tile.setAttribute('aria-label', `Otwórz: ${sub.title}`)

    tile.innerHTML = `
      <span class="subtopic-tile__label">${cat.label}</span>
      <h3 class="subtopic-tile__title">${sub.title}</h3>
      <span class="subtopic-tile__arrow" aria-hidden="true">→</span>
    `

    const open = () => openDrawer(sub, cat.label)
    tile.addEventListener('click', open)
    tile.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        open()
      }
    })

    grid.appendChild(tile)
  })

  panel.appendChild(grid)

  // Trigger reveal animation shortly after render
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      grid.querySelectorAll('.subtopic-tile').forEach(t => t.classList.add('visible'))
    })
  })
}

function initRevealObserver(elements) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  elements.forEach(el => observer.observe(el))
}
