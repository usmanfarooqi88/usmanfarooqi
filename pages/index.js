import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman Zahid Farooqi - UX / UI Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey..!
        </h1>

        <p className={styles.description}>
          Iʼm a Usman Farooqi, UI Designer with over 10 years of experience in the field. Since I started, I have been designing apps, user interfaces, brand identities and websites for various global clients, working together with amazing people from all over the world. 
        </p>

        <p className={styles.description}>
          I love adventures & traveling, making experiences and being constantly inspired by new things and new people
        </p>
      </main>
    </>
  )
}
