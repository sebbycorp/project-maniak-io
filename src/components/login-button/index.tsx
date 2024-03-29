import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { LockIcon } from '@/components/ui/lock-icon';

export function LoginButton({ className }: HTMLProps<HTMLButtonElement>) {
  return (
    <Button
      className={twMerge(
        'flex gap-2 bg-transparent border border-transparent  text-primary-action hover:border-gray-300',
        className,
      )}
    >
      <LockIcon />
      Log in
    </Button>
  );
}
