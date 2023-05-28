import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux'

import Body from '@/components/Body'
import Footer from '@/components/Footer'
import { NavItemPropsType } from '@/components/Header/types'

import { colorScheme } from '@/helpers/colorScheme'

import { wrapper } from "../store/store"
import { setState } from '@/store/slice'
import { selectLoading } from '@/store/slice'

import { database } from '@/firebase.js'

import '@/styles/globals.css'

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false },
)

const App = ({ Component, pageProps }: AppProps) => {
  const isLoading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const snapshot = await database.ref('/').once('value')
      const data = snapshot.val()

      dispatch(setState(data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    colorScheme()
    {isLoading && fetchData()}
  })

  return (
    <>
      <Head>
        <title>Rostislav</title>
      </Head>
      <Header navData={navigation} />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footer />
    </>
  )
}

const navigation: Array<NavItemPropsType> = [
  { text: 'rostislav.cv', href: '/', type: 'logo' },
  { text: '.experience', href: '/experience' },
  { text: '.projects', href: '/projects' },
]

export default wrapper.withRedux(App)
