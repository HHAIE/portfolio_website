import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
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
      
      <Header /> */}
    </div>
  )
}

export default Home
