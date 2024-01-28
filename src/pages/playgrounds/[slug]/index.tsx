import { PostContent } from '@/components/post-content';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Playground, getPlaygroundData, getPlaygroundsFiles } from '@/helpers/playgrounds';
import { Post, getPostData, getPostsFiles } from '@/helpers/posts';
import { PostLayout } from '@/layouts/post-layout';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
import { atom, useSetAtom } from 'jotai';
import { GetStaticPropsContext } from 'next';
import { useEffect } from 'react';

interface Params {
  slug: string;
}

export default function Playground({ playground }: { playground: Playground }) {
  return (
    <div className="my-16">
      <Breadcrumbs
        items={[
          { title: 'Home', url: '/' },
          { title: 'Playgrounds', url: '/playgrounds' },
          { title: playground.title, isCurrentPage: true },
        ]}
      />
      <div>
        <h2 className="text-[48px] font-semibold text-[#101828] mt-2">{playground.title}</h2>
        <p className="text-[#7F8A99] font-medium mt-4">{playground.description}</p>
      </div>
    </div>
  );
}

Playground.getLayout = function getLayout(page: React.ReactNode) {
  return <SubscribeLayout>{page}</SubscribeLayout>;
};

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { slug } = params as unknown as Params;

  const playgroundData = getPlaygroundData(slug);

  return {
    props: {
      playground: playgroundData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const playgroundsFileNames = getPlaygroundsFiles();

  const playgroundsSlugs = playgroundsFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: playgroundsSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
