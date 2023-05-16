import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import Body from '@/components/Body'

import { NavItemPropsType } from '@/components/Header/types'

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false }
)
const Footer = dynamic(
  () => import('../components/Footer'),
  { ssr: false }
)


const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header navData={navigation} />
    <Body>
      <Component {...pageProps} />
    </Body>
    <Footer />
  </>
  )

const navigation: Array<NavItemPropsType> = [
  {text: 'rostislav.cv', href: '/', type: 'logo'},
  {text: '.experience', href: '/experience'},
  {text: '.projects', href: '/projects'},
  {text: '.contacts', href: '/contacts'},
]

export default App
