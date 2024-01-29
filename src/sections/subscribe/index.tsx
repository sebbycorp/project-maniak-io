import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Subscribe() {
  return (
    <div className="py-24 bg-[#F9FAFB] w-screen">
      <h3 className="text-4xl text-center text-[#101828] font-semibold">
        Subscribe to my newsletter
      </h3>
      <p className="text-[#7F8A99] text-center font-medium mt-4 mb-8">
        Read articles from Sebastian Maniak directly inside your inbox. Subscribe to the <br />
        {` `}
        newsletter, and don`t miss out.
      </p>
      <div className="mx-auto flex justify-center gap-4">
        <Input
          className="w-[360px] h-[54px] text-base placeholder:text-base placeholder:tracking-[0.32px]"
          type="email"
          placeholder="Enter your email"
        />
        <Button className="bg-[#2463EB] px-6 h-[54px] text-normal font-semibold text-white">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
