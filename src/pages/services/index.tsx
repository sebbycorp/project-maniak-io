import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
import { ServicesCards } from '@/sections/services-cards';

export default function Home() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Services', isCurrentPage: true },
        ]}
      />

      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-[48px] font-semibold text-[#101828] mt-2">Services</h2>
          <Button className="bg-[#155EEF]">Contact us</Button>
        </div>
        <p className="text-[#7F8A99] font-medium mt-4">
          Explore our latest insights on DevOps. Get practical tips on tools like Azure, Docker, and
          Kubernetes. <br /> Straightforward advice for your DevOps. Join us and make your DevOps
          journey better.
        </p>
      </div>
      <ServicesCards />
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};
