import { contactContent } from '../../content/site'
import { WhatsAppCta } from '../ui/WhatsAppCta'
import { useInView } from '../useInView'
import './Contact.css'

export function Contact() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section id="contato" className="contact section" ref={ref} aria-labelledby="contact-title">
      <div className={`section__inner contact__layout ${isInView ? 'is-visible' : ''}`}>
        <div className="contact__copy">
          <p className="section__eyebrow">
            <span aria-hidden="true" />
            {contactContent.eyebrow}
          </p>
          <h2 id="contact-title" className="section__title">
            {contactContent.title}
          </h2>
          <p>{contactContent.description}</p>
        </div>

        <div className="contact__action">
          <p>WhatsApp</p>
          <h3>Inicie uma conversa sobre o seu projeto.</h3>
          <WhatsAppCta
            className="contact__cta"
            label={contactContent.whatsAppLabel}
            url={contactContent.whatsAppUrl}
          />
        </div>
      </div>
    </section>
  )
}
