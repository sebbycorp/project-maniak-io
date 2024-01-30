import { BaseLayout } from '@/layouts/base-layout';
import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';
import '@/styles/globals.css';
import { Layout } from 'lucide-react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import { Toaster } from 'sonner';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <BaseLayout>{page}</BaseLayout>);

  const ComponentWithlayout = getLayout(<Component {...pageProps} />);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {ComponentWithlayout}
    </NextThemesProvider>
  );
}
