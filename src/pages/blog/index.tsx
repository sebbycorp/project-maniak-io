import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { SubscribeLayout } from '@/layouts/subscribe-layout';

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

import { Post, getAllPosts } from '@/helpers/posts';

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
        <h2 className="text-[48px] font-semibold text-primary-title mt-2">Blog</h2>
        <p className="text-primary font-medium mt-4">
          Explore our latest insights on DevOps. Get practical tips on tools like Azure, Docker, and
          Kubernetes. <br /> Straightforward advice for your DevOps. Join us and make your DevOps
          journey better.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-20 max-sm:mt-8 mb-14 max-lg:gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
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
            <h3 className="text-2xl mt-3 text-primary-title max-w-80 tracking-[0.48px] font-semibold bloc">
              <div className="line-clamp-2 max-sm:line-clamp-3">{el.title}</div>
            </h3>

            <p className="mt-4 mb-8 text-primary tracking-[0.32px] font-medium">{el.description}</p>

            <Link
              href={pathname + '/' + el.slug}
              className="text-primary-action underline underline-offset-2 inline-block mt-auto"
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
              className="cursor-pointer"
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
