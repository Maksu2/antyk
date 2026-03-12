import { GLOSSARY } from '../data/glossary.js'

let backdrop = null
let modal = null
let modalInner = null

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

  document.body.appendChild(backdrop)
  document.body.appendChild(modal)

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
}

function buildModalHTML(sub, categoryLabel) {
  const quoteHTML = sub.quote
    ? `<blockquote class="drawer__quote">
        <p class="drawer__quote-text">${escHtml(sub.quote.text)}</p>
        <cite class="drawer__quote-author">— ${escHtml(sub.quote.author)}</cite>
      </blockquote>`
    : ''

  const tagsHTML = sub.tags
    .map(tag => `<span class="drawer__tag">${escHtml(tag)}</span>`)
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
