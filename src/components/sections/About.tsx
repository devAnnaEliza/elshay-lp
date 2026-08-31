import { aboutContent, temporaryAboutImage } from '../../content/site'
import { useInView } from '../useInView'
import './About.css'

export function About() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section id="sobre" className="about section" ref={ref} aria-labelledby="about-title">
      <div className={`section__inner about__layout ${isInView ? 'is-visible' : ''}`}>
        <figure className="about__visual">
          <div className="about__image-frame">
            <img src={temporaryAboutImage.src} alt={temporaryAboutImage.alt} loading="lazy" />
          </div>
          <figcaption className="about__callout">
            <strong>Do projeto à execução</strong>
            <span>Atuação integrada em cada etapa.</span>
          </figcaption>
        </figure>

        <div className="about__content">
          <p className="section__eyebrow">
            <span aria-hidden="true" />
            {aboutContent.eyebrow}
          </p>
          <h2 id="about-title" className="section__title">
            {aboutContent.title}
          </h2>
          <div className="about__copy">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="about__pillars">
            {aboutContent.pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt>{pillar.title}</dt>
                <dd>{pillar.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
