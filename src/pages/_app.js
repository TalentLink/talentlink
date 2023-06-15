import { Anuphan, Mitr } from 'next/font/google';
import Head from 'next/head';

import '@/styles/globals.css';
import styles from '@/styles/shared.module.css';

const mitr = Mitr({
  weight: ['400'],
  fallback: ['cursive'],
  variable: '--font-header',
  subsets: ['thai'],
});

const anuphan = Anuphan({
  weight: ['300', '600'],
  fallback: ['sans-serif'],
  variable: '--font-content',
  subsets: ['thai'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TalentLink | BKK</title>
        <meta
          name="description"
          content="ลองทำแบบสอบถามเพื่อหาอาชีพสาย Tech ที่เหมาะกับคุณ"
          key="desc"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TalentLink | BKK" />
        <meta
          property="og:description"
          content="ลองทำแบบสอบถามเพื่อหาอาชีพสาย Tech ที่เหมาะกับคุณ"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${anuphan.variable} ${mitr.variable}`}>
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
