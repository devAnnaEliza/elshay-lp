import { heroContent, temporaryHeroImage } from '../../content/site'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span aria-hidden="true" />
            {heroContent.eyebrow}
          </p>

          <h1 id="hero-title" className="hero__title">
            {heroContent.heading.before}
            <br />
            <em>{heroContent.heading.emphasis}</em> {heroContent.heading.after}
            <br />
            {heroContent.heading.finalLine}
          </h1>

          <p className="hero__description">{heroContent.description}</p>

          <div className="hero__actions">
            <button className="button button--primary" type="button" disabled>
              Fale pelo WhatsApp
            </button>
            <a className="button button--secondary" href="#servicos">
              Nossos Serviços
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img className="hero__image" src={temporaryHeroImage.src} alt={temporaryHeroImage.alt} />
            <div className="hero__image-overlay" aria-hidden="true" />
          </div>
          <dl className="hero__details" aria-label="Atuação integrada da El Shay">
            {heroContent.details.map((detail) => (
              <div key={detail.title}>
                <dt>{detail.title}</dt>
                <dd>{detail.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
