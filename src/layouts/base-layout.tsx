import React from 'react';

import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="container px-8">
        <Header />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
}
