import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the<span>React</span> World.</h1>
          <p>
            get access to all the publications <br/>
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton/>
        </section>

        <Image src="/images/avatar.svg" alt="Girl Coding" width="336" height="521"/>
      </main>
    </>
  )
}
