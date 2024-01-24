import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LinearGradient } from '@/components/ui/linear-gradient';

import img from '/assets/hero/hero.jpg';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="h-[800px] relative flex gap-[64px] items-center">
      <div>
        <Badge className="mb-2">Technology Evangelist | Advisor | Consultant</Badge>
        <h2 className="text-[#101828] text-[48px] tracking-[0.96px] leading-[60px]">
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
        <Image src={img} alt="/assets/hero/hero.jpt" />
      </div>
      <LinearGradient className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10" />
    </div>
  );
}
