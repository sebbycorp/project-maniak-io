import { routes } from '@/constants/routes';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { LockIcon } from '@/components/ui/lock-icon';

export function Header() {
  return (
    <header className="flex justify-between h-20">
      <div className="flex gap-20 items-center text-primary">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex gap-8 items-center">
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
      <div className="flex items-center gap-5">
        <Switch />
        <div className="flex items-center gap-2">
          <Button className="flex gap-2 bg-transparent border border-transparent  text-[#2463EB] hover:border-gray-300">
            <LockIcon />
            Log in
          </Button>
          <Button className="bg-transparent border px-6 py-5 text-black border-[rgba(16, 24, 40, 0.20)]">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
