type WhatsAppCtaProps = {
  className: string
  label: string
  url: string | null
}

export function WhatsAppCta({ className, label, url }: WhatsAppCtaProps) {
  if (url === null) {
    return (
      <div>
        <span className={`${className} ${className}--pending`}>
          {label}
        </span>
        <p className="whatsapp-pending-message" role="status">
          Canal em atualização.
        </p>
      </div>
    )
  }

  return (
    <a className={className} href={url} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
}
