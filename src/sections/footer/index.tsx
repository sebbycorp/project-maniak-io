import Link from 'next/link';
import React from 'react';

import { Logo } from '@/components/ui/logo';

import { routes } from '@/constants/routes';
import { social } from '@/constants/social';

export function Footer() {
  return (
    <div className="w-screen bg-[#171e2b]">
      <div className="container">
        <div className="py-12">
          <div className="flex justify-between">
            <Link href="/">
              <Logo variant="light" />
            </Link>
            <div className="flex items-center gap-6">
              {social.map((el, i) => (
                <a key={i} href={el.link} target="_blank">
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
          <p className="text-normal text-[#EAECF0] mt-8">
            Amazing digital experiences that create more <br /> happy in the world.
          </p>
        </div>
      </div>
      <div className="bg-[#101828] py-8">
        <div className="container flex items-center justify-between">
          <ul className="flex gap-8 uppercase">
            {routes.map((el, i) => (
              <Link
                key={i}
                href={el.url}
                className="text-sm font-semibold text-[#D0D5DD] hover:text-[#ccc] transition-colors"
              >
                {el.name}
              </Link>
            ))}
          </ul>
          <div className="text-[#D0D5DD]">
            © 2024 Maniak Academy. All rights reserved.Made with for a better web.
          </div>
        </div>
      </div>
    </div>
  );
}
