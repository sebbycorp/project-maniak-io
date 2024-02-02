import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactUs({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={twMerge('bg-[#155EEF] text-white', className)}>
          Contact us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl text-[#101828] font-semibold tracking-[0.6px] mb-2">
            Contact us
          </DialogTitle>
          <DialogDescription className="text-[#7F8A99] font-medium tracking-[0.32px]">
            Please write your message and contact information below. We will respond as soon as
            possible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your name" />
          <Textarea placeholder="Message" />
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-[#7F8A99] tracking-[0.32px] text-[14px]">
              I confirm that I’ve read and agree to Privacy Policy
            </label>
          </div>

          <Button type="submit" size="sm" className="px-3 mt-2 h-12 bg-[#2463EB]">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
