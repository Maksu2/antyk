import { GLOSSARY, TAG_GLOSSARY } from '../data/glossary.js'

let backdrop = null
let modal = null
let modalInner = null
let tooltipEl = null

export function initDrawer() {
  // Backdrop
  backdrop = document.createElement('div')
  backdrop.className = 'drawer-backdrop'
  backdrop.setAttribute('aria-hidden', 'true')
  backdrop.addEventListener('click', closeDrawer)

  // Modal
  modal = document.createElement('div')
  modal.className = 'modal'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-label', 'Szczegóły tematu')

  const closeBtn = document.createElement('button')
  closeBtn.className = 'drawer__close'
  closeBtn.setAttribute('type', 'button')
  closeBtn.setAttribute('aria-label', 'Zamknij')
  closeBtn.textContent = '✕'
  closeBtn.addEventListener('click', closeDrawer)

  modalInner = document.createElement('div')
  modalInner.className = 'modal__inner'

  modal.appendChild(closeBtn)
  modal.appendChild(modalInner)

  // Tooltip overlay
  tooltipEl = document.createElement('div')
  tooltipEl.className = 'js-tooltip'
  tooltipEl.setAttribute('aria-hidden', 'true')

  document.body.appendChild(backdrop)
  document.body.appendChild(modal)
  document.body.appendChild(tooltipEl)

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeDrawer()
    }
  })
}

export function openDrawer(subtopic, categoryLabel) {
  if (!modal) return

  modalInner.innerHTML = buildModalHTML(subtopic, categoryLabel)
  initTooltips(modalInner)

  backdrop.classList.add('is-open')
  modal.classList.add('is-open')
  document.body.style.overflow = 'hidden'

  // Scroll to top of modal on reopen
  modal.scrollTop = 0

  // Focus management
  const closeBtn = modal.querySelector('.drawer__close')
  if (closeBtn) closeBtn.focus()
}

export function closeDrawer() {
  if (!modal) return

  backdrop.classList.remove('is-open')
  modal.classList.remove('is-open')
  document.body.style.overflow = ''
  tooltipEl.classList.remove('is-visible')
}

function buildModalHTML(sub, categoryLabel) {
  const quoteHTML = sub.quote
    ? `<blockquote class="drawer__quote">
        <p class="drawer__quote-text">${escHtml(sub.quote.text)}</p>
        <cite class="drawer__quote-author">— ${escHtml(sub.quote.author)}</cite>
      </blockquote>`
    : ''

  const tagsHTML = sub.tags
    .map(tag => {
      const def = TAG_GLOSSARY[tag.toLowerCase()]
      return def
        ? `<span class="drawer__tag term" data-tooltip="${def.replace(/"/g, '&quot;')}">${escHtml(tag)}</span>`
        : `<span class="drawer__tag">${escHtml(tag)}</span>`
    })
    .join('')

  return `
    <p class="drawer__category">${escHtml(categoryLabel)}</p>
    <h2 class="drawer__title">${escHtml(sub.title)}</h2>
    <hr class="drawer__divider" />
    <p class="drawer__body">${annotateBody(escHtml(sub.body))}</p>
    ${quoteHTML}
    <div class="drawer__tags" aria-label="Tagi">${tagsHTML}</div>
  `
}

function initTooltips(container) {
  container.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      tooltipEl.textContent = el.dataset.tooltip
      positionTooltip(el)
      tooltipEl.classList.add('is-visible')
      // Re-position after layout pass (fixes first-time width = 0)
      requestAnimationFrame(() => positionTooltip(el))
    })
    el.addEventListener('mouseleave', () => {
      tooltipEl.classList.remove('is-visible')
    })
  })
}

function positionTooltip(el) {
  const rect = el.getBoundingClientRect()
  const tipW = tooltipEl.offsetWidth || 260
  const tipH = tooltipEl.offsetHeight || 48
  const gap = 10
  let left = rect.left + rect.width / 2 - tipW / 2
  let top = rect.top - tipH - gap

  // Keep within viewport horizontally
  left = Math.max(8, Math.min(left, window.innerWidth - tipW - 8))
  // Flip below if not enough space above
  if (top < 8) top = rect.bottom + gap

  tooltipEl.style.left = `${left}px`
  tooltipEl.style.top = `${top}px`
}

function annotateBody(escapedText) {
  let result = escapedText
  for (const { pattern, def } of GLOSSARY) {
    result = result.replace(pattern, match =>
      `<span class="term" data-tooltip="${def.replace(/"/g, '&quot;')}">${match}</span>`
    )
  }
  return result
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
