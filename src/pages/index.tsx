import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news </title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Hábitos sustentaveis mudam<br /><span>você</span>, você muda o mundo.</h1>
          <p>Assine a newsletter e fique sabendo de novos posts<br/>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

export default Home


