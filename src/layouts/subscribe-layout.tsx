import React from 'react';

import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';
import { Subscribe } from '@/sections/subscribe';

export function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        {children}
      </div>
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
}
