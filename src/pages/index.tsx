import { routes } from '@/constants/routes';
import { Hero } from '@/sections/hero';
import { TrustedBy } from '@/sections/trusted-by';
import { Inter } from 'next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
    </div>
  );
}
