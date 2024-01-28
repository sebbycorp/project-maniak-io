import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { categories } from '@/constants/categories';
import { Playground, getAllPlaygrounds } from '@/helpers/playgrounds';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function Playgrounds({ playgrounds }: { playgrounds: Playground[] }) {
  const pathname = usePathname();
  const router = useRouter();

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
            {playgrounds.map((el, i) => (
              <Card key={i}>
                <h3 className="text-2xl mt-3 text-[#101828] max-w-80 tracking-[0.48px] font-semibold bloc">
                  <div className="line-clamp-1">{el.title}</div>
                </h3>

                <p className="mt-4 mb-8 text-[#7F8A99] tracking-[0.32px] font-medium">
                  <div className="line-clamp-2">{el.description}</div>
                </p>

                <Button
                  className="bg-[#2463EB]"
                  onClick={() => router.push(pathname + '/' + el.slug)}
                >
                  Read more
                </Button>
              </Card>
            ))}
          </div>
          <div className="flex flex-col items-start gap-1 w-72 max-w-full">
            <p className="mb-5 text-sm text-[#004EEB]">Categories</p>
            <Button className="flex w-full  justify-start text-[#344054]" variant="ghost">
              View all
            </Button>

            {categories.map((el, i) => (
              <Button className="flex w-full  justify-start text-[#344054]" key={i} variant="ghost">
                {el}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const playgrounds = getAllPlaygrounds();

  return {
    props: {
      playgrounds,
    },
  };
}
