import email from "./email"
import linkedIn from "./linkedin"
import telegram from "./telegram"

const mail = email({address: 'rostislav.nagimov@gmail.com'})
const tele = telegram({name: 'rostislavnagimov'})
const link = linkedIn({name: 'rostislavnagimov', alias: 'Rostislav Nagimov'})

const replacer = (string: string) => {
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
  return string
}

export default replacer;



