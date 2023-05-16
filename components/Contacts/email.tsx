import ExtLink from "@/helpers/ExtLink"

const email: React.FC<EmailProps> = ({address, template, alias}) => {
  let mailto = `mailto:${address}`
  
  if (template) {
    mailto += `?${Object.entries(template).map(([key, value]) => (`${key}=${encodeURIComponent(value)}`)).join('&')}`
  }
  
  return (
    <ExtLink
      href={mailto}
      alias={alias || address}
    />
  )
}

interface EmailProps {
  address: string
  template?: TemplateType
  alias?: string
}
type TemplateType = {
  subject?: string,
  body?: string,
  cc?: string,
  bcc?: string,
}

export default email
