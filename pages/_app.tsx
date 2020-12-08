import '../styles/globals.scss'
import {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Head>
        <title>FE.Labs</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
