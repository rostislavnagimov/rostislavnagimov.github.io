import email from "./email"
import linkedIn from "./linkedin"
import telegram from "./telegram"

import ExtLink from "@/helpers/ExtLink"

const mail = email({ address: 'rostislav.nagimov@gmail.com' })
const tele = telegram({ name: 'rostislavnagimov' })
const link = linkedIn({ name: 'rostislavnagimov', alias: 'Rostislav Nagimov' })

const replacer = (string: string) => {
  const externalLink = string.match(/\\(.+)\\/g)

  if (string.includes('/email/')) {
    return (
      <>
        {string.split('/email/')[0]}
        {mail}
      </>
    )
  }
  if (string.includes('/telegram/')) {
    return (
      <>
        {string.split('/telegram/')[0]}
        {tele}
      </>
    )
  }
  if (string.includes('/linkedIn/')) {
    return (
      <>
        {string.split('/linkedIn/')[0]}
        {link}
      </>
    )
  }
  if (externalLink) {
    return (
      <>
        <ExtLink
          href={externalLink[0].slice(2, -2)}
          target="blank"
        />
      </>
    )
  }

  return string
}

export default replacer;



