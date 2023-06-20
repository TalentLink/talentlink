import { Anuphan, Mitr } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

import { label } from '@/data/label';

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
        <meta name="description" content={label.meta} key="desc" />
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
