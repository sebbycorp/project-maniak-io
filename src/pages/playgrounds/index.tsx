import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Playground, getAllPlaygrounds } from '@/helpers/playgrounds';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
import clsx from 'clsx';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Playgrounds({ playgrounds }: { playgrounds: Playground[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = Array.from(new Set(playgrounds.map((item) => item.category)));

  const handleCategoryClick = (category: string) => {
    router.push({
      pathname,
      query: { category }, // Set the category query parameter
    });
  };

  // Get the selected category from query parameter
  const selectedCategory = Array.isArray(router.query.category)
    ? router.query.category[0]
    : router.query.category;

  // Filter playgrounds based on selected category
  const filteredPlaygrounds = selectedCategory
    ? playgrounds.filter((item) => item.category === selectedCategory)
    : playgrounds;

  const searchParamsCategory = searchParams.get('category');

  return (
    <div className="my-16">
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Playgrounds', isCurrentPage: true },
        ]}
      />
      <div>
        <h2 className="text-[48px] font-semibold text-[#101828] mt-2">DevOps Playgrounds</h2>
        <p className="text-[#7F8A99] font-medium mt-4">
          Playgrounds are sandboxed Cloud and DevOps environments for you to experience without fear
          of failure
        </p>
      </div>

      <div className="my-7">
        <div className="flex gap-6">
          <div className="grid grid-cols-2 gap-4">
            {filteredPlaygrounds.map((el, i) => (
              <Card className="max-w-[424px] min-w-full" key={i}>
                <h3 className="text-2xl mt-3 text-[#101828] max-w-80 tracking-[0.48px] font-semibold bloc">
                  <div className="line-clamp-1">{el.title}</div>
                </h3>

                <div className="mt-4 mb-8 text-[#7F8A99] tracking-[0.32px] font-medium">
                  <p className="line-clamp-2">{el.description}</p>
                </div>

                <Button
                  className="bg-[#2463EB]"
                  onClick={() => router.push(pathname + '/' + el.slug)}
                >
                  Read more
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-start gap-1 w-72 max-w-full ml-auto">
            <p className="mb-5 text-sm text-[#004EEB]">Categories</p>
            <Button
              className={clsx(
                'flex w-full  justify-start text-[#667085]',
                !searchParamsCategory && 'bg-[#F9FAFB] text-[#344054]',
              )}
              variant="ghost"
              onClick={() => router.push(pathname)}
            >
              View all
            </Button>

            {categories.map((el, i) => (
              <Button
                className={clsx(
                  'text-[#344054]',
                  'flex w-full  justify-start text-[#667085]',
                  searchParamsCategory === el && 'bg-[#F9FAFB] text-[#344054]',
                )}
                key={i}
                variant="ghost"
                onClick={() => handleCategoryClick(el)}
              >
                {el}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Playgrounds.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};

export function getStaticProps() {
  const playgrounds = getAllPlaygrounds();

  return {
    props: {
      playgrounds,
    },
  };
}
