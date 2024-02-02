import { GetStaticPropsContext } from 'next';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

import { SubscribeLayout } from '@/layouts/subscribe-layout';

import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

import { Playground, getPlaygroundData, getPlaygroundsFiles } from '@/helpers/playgrounds';

interface Params {
  slug: string;
}

export default function PlaygroundPreview({ playground }: { playground: Playground }) {
  const pathname = usePathname();
  const router = useRouter();

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
        <p className="text-[#7F8A99] font-medium mt-4 mb-8">{playground.description}</p>
        <Button className="bg-[#2463EB]" onClick={() => {}}>
          Start Playground
        </Button>
      </div>
      <Markdown>{playground.content}</Markdown>
    </div>
  );
}

PlaygroundPreview.getLayout = function getLayout(page: React.ReactNode) {
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
