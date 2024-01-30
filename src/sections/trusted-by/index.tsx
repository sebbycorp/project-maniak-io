import Image from 'next/image';

import { Card } from '@/components/ui/card';

import { trustedBy } from '@/constants/trusted-by';

export function TrustedBy() {
  return (
    <div className="py-24 max-md:pt-4">
      <h2 className="text-4xl font-semibold mb-5">Devops&Cloud Playgrounds</h2>
      <p className="text-xl text-[#7F8A99] tracking-[0.4px]">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain
        more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-12 grid grid-cols-5 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1">
        {trustedBy.map((el, i) => (
          <Card
            className="flex justify-center items-center box-border h-[175px] max-h-[175px] px-8 max-lg:px-4 bg-white max-sm:px-2"
            key={i}
          >
            <Image
              src={el}
              alt="Card Image"
              className=" object-contain max-h-[140px] max-sm:max-w-[140px] max-sm:max-w-full"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
