import '@/styles/globals.css';
import { Anuphan, Chonburi } from 'next/font/google';

const chonburi = Chonburi({
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
    <main className={`${anuphan.variable} ${chonburi.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
