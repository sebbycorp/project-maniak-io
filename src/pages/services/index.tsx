import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SubscribeLayout } from '@/layouts/subscribe-layout';

export default function Home() {
  return (
    <>
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Services', isCurrentPage: true },
        ]}
      />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};
