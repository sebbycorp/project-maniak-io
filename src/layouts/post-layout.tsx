import React from 'react';

import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';
import { Subscribe } from '@/sections/subscribe';

export function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="container px-8">
        <Header />
      </div>
      {children}
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
}
