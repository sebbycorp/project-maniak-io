import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <div className="container px-8">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </React.Fragment>
  );
}
