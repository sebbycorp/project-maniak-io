import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LinearGradient } from '@/components/ui/linear-gradient';

import img from '/public/hero/hero.jpg';

export function Hero() {
  return (
    <div className="py-32 relative flex gap-[64px] items-center max-md:flex-col max-md:pt-12">
      <div>
        <Badge className="mb-2">Technology Evangelist | Advisor | Consultant</Badge>
        <h2 className="text-[#101828] text-5xl tracking-[0.96px] text-balance leading-[60px] max-md:text-2">
          I build,secure and automate{' '}
          <span className="text-transparent  bg-clip-text bg-gradient-to-l from-[#2463EB] to-[#84C8F9]">
            infrastructure
          </span>
        </h2>
        <p className="mt-4 text-[#7F8A99] text-[20px]">
          Follow me for daily updates and code examples. Follow me for daily updates and code
          examples.
        </p>
        <Button className="mt-10 px-10 py-4 shadow-md bg-[#2463EB] text-lg rounded-lg h-14">
          Get Started
        </Button>
      </div>
      <div>
        <Image src={img} alt="Hero image" className="rounded-2xl" />
      </div>
      <LinearGradient className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10" />
    </div>
  );
}
