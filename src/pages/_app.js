import '@/styles/globals.css';
import { Anuphan, Mitr } from 'next/font/google';

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
    <main className={`${anuphan.variable} ${mitr.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
