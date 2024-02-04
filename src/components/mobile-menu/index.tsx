import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

import { LoginButton } from '@/components/login-button';
import { ContactUs } from '@/components/modals/contact-us';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Logo } from '@/components/ui/logo';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@/components/ui/sheet';

import { routes } from '@/constants/routes';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const fillColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="hidden max-md:block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="cursor-pointer p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke={fillColor}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </SheetTrigger>
        <SheetContent className="min-w-[100vw] py-8 pt-0 flex flex-col justify-between items-start">
          <div className="inline-flex w-full flex-col gap-8">
            <SheetHeader>
              <div className="h-20 flex items-center justify-between mr-10 gap-2 relative">
                <Logo />
                <ThemeSwitcher />
                <Separator className="absolute bottom-0 -left-6  min-w-[100vw]" />
              </div>
            </SheetHeader>
            <ul className="flex flex-col gap-6">
              {routes.map((route) => (
                <Link
                  className="text-primary hover:text-[#ccc] transition-colors text-lg"
                  href={route.url}
                  key={route.name}
                  onClick={() => setOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </ul>
          </div>
          <SheetFooter>
            <div className="flex gap-4">
              <LoginButton />
              <ContactUs />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
