import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Subscribe() {
  return (
    <div className="py-24 bg-primary-card w-screen">
      <div className="container">
        <h3 className="text-4xl text-center text-primary-title font-semibold">
          Subscribe to my newsletter
        </h3>
        <p className="text-primary text-center font-medium mt-4 mb-8">
          Read articles from Sebastian Maniak directly inside your inbox. Subscribe to the <br />
          {` `}
          newsletter, and don`t miss out.
        </p>
        <div className="mx-auto flex justify-center items-center gap-4 max-sm:flex-col">
          <Input
            className="w-[360px] h-[54px] text-base max-sm:w-full placeholder:text-base placeholder:tracking-[0.32px]"
            type="email"
            placeholder="Enter your email"
          />
          <Button className="bg-primary-action px-6 h-[54px] max-sm:w-full text-normal font-semibold text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
