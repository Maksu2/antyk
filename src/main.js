import './style.css'
import { renderHero } from './components/hero.js'
import { renderCategories } from './components/categories.js'
import { initDrawer } from './components/drawer.js'

const app = document.getElementById('app')

app.innerHTML = `
  <header class="site-header" id="site-header">
    <span class="site-header__ornament" aria-hidden="true"><span class="site-header__diamond">◆</span></span>
    <span class="site-header__logo">Antyk</span>
    <span class="site-header__ornament" aria-hidden="true"><span class="site-header__diamond">◆</span></span>
  </header>

  <main>
    <section class="hero" id="hero" aria-label="Wprowadzenie"></section>

    <section class="map-section" id="map" aria-label="Mapa tematyczna">
      <div class="section-divider" aria-hidden="true">
        <div class="section-divider__line"></div>
        <span class="section-divider__ornament">✦</span>
        <div class="section-divider__line"></div>
      </div>
      <div id="categories"></div>
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <p>© ANTYK · Literatura Starożytna</p>
    <p>Projekt edukacyjny</p>
  </footer>
`

// Render components
renderHero(document.getElementById('hero'))
renderCategories(document.getElementById('categories'))
initDrawer()

// Header scroll effect
const header = document.getElementById('site-header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60)
}, { passive: true })
