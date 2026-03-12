export function renderHero(container) {
  container.innerHTML = `
    <p class="hero__eyebrow">Literatura · Filozofia · Mit</p>
    <h1 class="hero__title">ANTYK</h1>
    <p class="hero__subtitle">Starożytna Grecja i Rzym</p>
    <div class="hero__quote">
      <span class="hero__quote-text">γνῶθι σεαυτόν</span>
      <span class="hero__quote-translation">Poznaj samego siebie</span>
    </div>
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
      <span class="hero__scroll-label">Odkryj</span>
    </div>
  `
}
