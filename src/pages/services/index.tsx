import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
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
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};
