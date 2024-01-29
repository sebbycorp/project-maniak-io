import { PostContent } from '@/components/post-content';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Playground, getPlaygroundData, getPlaygroundsFiles } from '@/helpers/playgrounds';
import { Post, getPostData, getPostsFiles } from '@/helpers/posts';
import { BaseLayout } from '@/layouts/base-layout';
import { PostLayout } from '@/layouts/post-layout';
import { SubscribeLayout } from '@/layouts/subscribe-layout';
import { atom, useSetAtom } from 'jotai';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface Params {
  slug: string;
}

export default function Playground({ playground }: { playground: Playground }) {
  console.log(playground);
  return <div className="my-16">{playground.content}</div>;
}

Playground.getLayout = function getLayout(page: React.ReactNode) {
  return <BaseLayout>{page}</BaseLayout>;
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
