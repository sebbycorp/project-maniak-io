import { GetStaticPropsContext } from 'next';
import React from 'react';

import { PlaygroundContent } from '@/components/playground-content';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

import { Playground, getPlaygroundData, getPlaygroundsFiles } from '@/helpers/playgrounds';

interface Params {
  slug: string;
}

export default function PlaygroundPage({ playground }: { playground: Playground }) {
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
        <PlaygroundContent playground={playground} />
      </div>
    </div>
  );
}

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
