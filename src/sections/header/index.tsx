import Link from 'next/link';

import { LoginButton } from '@/components/login-button';
import { MobileMenu } from '@/components/mobile-menu';
import { ContactUs } from '@/components/modals/contact-us';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { LockIcon } from '@/components/ui/lock-icon';
import { Logo } from '@/components/ui/logo';
import { Separator } from '@/components/ui/separator';

import { routes } from '@/constants/routes';

export function Header() {
  return (
    <header className="flex justify-between h-20 relative">
      <Separator className="absolute bottom-0 left-1/2 -translate-x-2/4 w-screen" />
      <div className="flex gap-20 items-center text-primary max-lg:gap-8">
        <Link href="/" className="max-md:mr-4">
          <Logo />
        </Link>
        <nav className="flex gap-8 items-center max-lg:gap-4 max-md:hidden">
          {routes.map((route) => (
            <Link
              className="text-[#7F8A99] hover:text-[#ccc] transition-colors"
              key={route.name}
              href={route.url}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-5 max-lg:gap-2">
        <ThemeSwitcher />
        <div className="flex items-center gap-2">
          <LoginButton className="max-md:hidden" />
          <ContactUs className="max-md:hidden" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
