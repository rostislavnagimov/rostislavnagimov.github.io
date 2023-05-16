import React from "react"
import ExtLink from "@/helpers/ExtLink"

const telegram: React.FC<TelegramProps> = ({ name, alias }) => (
  <ExtLink
    href={`http://t.me/${name}`}
    alias={alias || `@${name}`}
    target='blank'
  />
)

interface TelegramProps {
  name: string,
  alias?: string,
}

export default telegram