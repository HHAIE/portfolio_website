import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <div className="bg-circle1"></div>
    <div className="bg-circle2"></div>
    
    <Header />
    <Component {...pageProps} />
  </>)
}

export default MyApp
