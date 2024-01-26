import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card } from '@/components/ui/card';
import { getAllPosts, Post } from '@/helpers';
import Link from 'next/link';

export default function Blog({ posts }: { posts: Post[] }) {
  console.log(posts);
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
      <div className="grid grid-cols-3 gap-8 my-20">
        {posts.map((el, i) => (
          <Card key={i}>
            {el.tags ? (
              <div className="inline-flex gap-1 items-center bg-[#EFF4FF] rounded-[24px] p-2">
                {el.tags.map((tag, i) => (
                  <Badge className="bg-white text-xs" key={i}>
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}

            <h3 className="text-2xl mt-3 text-[#101828] tracking-[0.48px] font-semibold">
              {el.title}
            </h3>

            <p className="mt-4 mb-8 text-[#7F8A99] tracking-[0.32px] font-medium">
              {el.description}
            </p>

            <Link
              href={'blog' + '/' + el.slug}
              className="text-[#2463EB] underline underline-offset-2"
            >
              Learn more
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const data = getAllPosts();
  return {
    props: {
      posts: data,
    },
  };
};
