import email from "./email"
import telegram from "./telegram"

const mail = email({address: 'rostislav.nagimov@gmail.com'})
const tele = telegram({name: 'rostislavnagimov'})

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
  return string
}

export default replacer;



