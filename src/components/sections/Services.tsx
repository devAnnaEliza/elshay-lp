import { servicesContent } from '../../content/site'
import { useInView } from '../useInView'
import './Services.css'

export function Services() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section id="servicos" className="services section" ref={ref} aria-labelledby="services-title">
      <div className="section__inner">
        <div className="services__header">
          <div>
            <p className="section__eyebrow">
              <span aria-hidden="true" />
              {servicesContent.eyebrow}
            </p>
            <h2 id="services-title" className="section__title">
              {servicesContent.title}
            </h2>
          </div>
        </div>

        <ol className={`services__grid ${isInView ? 'is-visible' : ''}`}>
          {servicesContent.items.map((service, index) => (
            <li key={service.title} className="service-card" style={{ '--service-index': index } as React.CSSProperties}>
              <div className="service-card__meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <span className="service-card__rule" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
