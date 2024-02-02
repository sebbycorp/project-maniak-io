import { SubscribeLayout } from '@/layouts/subscribe-layout';

import { ContactUs } from '@/components/modals/contact-us';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

import { ServicesCards } from '@/sections/services-cards';

export default function Home() {
  return (
    <div className="my-16">
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Services', isCurrentPage: true },
        ]}
      />

      <div>
        <h2 className="text-[48px] font-semibold text-[#101828] mt-2">Services</h2>
        <p className="text-[#7F8A99] font-medium mt-4 mb-4">
          Explore our latest insights on DevOps. Get practical tips on tools like Azure, Docker, and
          Kubernetes. <br /> Straightforward advice for your DevOps. Join us and make your DevOps
          journey better.
        </p>
      </div>
      <ServicesCards />
      <Alert className="mt-8 flex items-center justify-between p-16 border-[#2463EB] bg-[#2463EB] text-white">
        <AlertDescription className="text-2xl">
          We are always in touch, ready to help you <br /> and answer all your questions.
        </AlertDescription>
        <ContactUs className="px-12 py-8" />
      </Alert>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};
