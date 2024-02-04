import '@/styles/globals.css';
import type { NextPage } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import { Toaster as Sonner } from 'sonner';

import { BaseLayout } from '@/layouts/base-layout';

import { Toaster } from '@/components/ui/toaster';

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
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Sonner />
      <Toaster />
      {ComponentWithlayout}
    </NextThemesProvider>
  );
}
