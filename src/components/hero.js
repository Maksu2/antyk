export function renderHero(container) {
  container.innerHTML = `
    <div class="hero__title">Antyk</div>
    <p class="hero__subtitle">Literatura i myśl starożytnej Grecji i Rzymu</p>
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
      <span class="hero__scroll-label">Odkryj</span>
    </div>
  `
}
