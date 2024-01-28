import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { getAllPosts, Post } from '@/helpers';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export default function Blog({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const postsPerPage = 9;

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams],
  );

  const startIndex = searchParams.get('page')
    ? (Number(searchParams.get('page')) - 1) * postsPerPage
    : 0;

  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = posts.slice(startIndex, endIndex);

  const paginationPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="my-16">
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Blog', isCurrentPage: true },
        ]}
      />

      <div>
        <h2 className="text-[48px] font-semibold text-[#101828] mt-2">Blog</h2>
        <p className="text-[#7F8A99] font-medium mt-4">
          Explore our latest insights on DevOps. Get practical tips on tools like Azure, Docker, and
          Kubernetes. <br /> Straightforward advice for your DevOps. Join us and make your DevOps
          journey better.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20 mb-14">
        {paginatedPosts.map((el, i) => (
          <Card className="flex flex-col items-start" key={i}>
            {el.tags ? (
              <div className="inline-flex gap-1 items-center bg-[#EFF4FF] rounded-[24px] p-2">
                {el.tags.map((tag, i) => (
                  <Badge className="bg-white text-xs" key={i}>
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
            <h3 className="text-2xl mt-3 text-[#101828] max-w-80 tracking-[0.48px] font-semibold bloc">
              <div className="line-clamp-2">{el.title}</div>
            </h3>

            <p className="mt-4 mb-8 text-[#7F8A99] tracking-[0.32px] font-medium">
              {el.description}
            </p>

            <Link
              href={'blog' + '/' + el.slug}
              className="text-[#2463EB] underline underline-offset-2 inline-block mt-auto"
            >
              Learn more
            </Link>
          </Card>
        ))}
      </div>

      <Separator />

      <Pagination className="mt-12">
        <PaginationContent>
          {[...Array(paginationPages)].map((_, i) => (
            <PaginationItem
              key={i}
              onClick={() => router.push(pathname + '?' + createQueryString('page', i + 1))}
            >
              <PaginationLink
                isActive={
                  searchParams.get('page') ? Number(searchParams.get('page')) === i + 1 : i === 0
                }
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
}

Blog.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
