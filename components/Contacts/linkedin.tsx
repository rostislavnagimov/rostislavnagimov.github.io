import React from "react"
import ExtLink from "@/components/ExtLink"

const linkedIn: React.FC<LinkedInProps> = ({ name, alias }) => (
  <ExtLink
    href={`https://www.linkedin.com/in/${name}`}
    alias={alias || name}
    target="blank"
  />
)

interface LinkedInProps {
  name: string,
  alias?: string,
}

export default linkedIn