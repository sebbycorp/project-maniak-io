import { Card, CardContent } from '@/components/ui/card';
import { trustedBy } from '@/constants/trusted-by';
import Image from 'next/image';

export function TrustedBy() {
  return (
    <div className="my-24">
      <h2 className="text-4xl font-semibold mb-5">Devops&Cloud Playgrounds</h2>
      <p className="text-xl text-[#7F8A99] tracking-[0.4px]">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain
        more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-12 grid grid-cols-5 gap-5">
        {trustedBy.map((el, i) => (
          <Card
            className="flex justify-center items-center box-border h-[175px] max-h-[175px] px-8 bg-white"
            key={i}
          >
            <Image src={el} alt="Card Image" className=" object-contain max-h-[140px]" />
          </Card>
        ))}
      </div>
    </div>
  );
}
