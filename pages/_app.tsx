import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
