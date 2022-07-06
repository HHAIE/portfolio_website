import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import Header from "../components/header";
import Nav from "../components/nav";
import Home from "../components/home";

const Main: NextPage = () => {
  return (
    <>
    <Head>
        <title>Hazim Portfolio</title>
        <meta name="description" content="The portfolio of Hazim Hussein a junior developer" />
        <meta name="author" content="Hazim Hussein" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>

      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Nav />
      <Home />
    </>
    // <div className={styles.container}>
      
    // </div>
  )
}

export default Main
