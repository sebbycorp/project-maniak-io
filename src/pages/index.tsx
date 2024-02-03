import { GetStaticPropsContext } from 'next';

import { Hero } from '@/sections/hero';
import { PlaygroundPreview } from '@/sections/playground-preview';
import { TrustedBy } from '@/sections/trusted-by';

import { Playground, getPlaygroundData } from '@/helpers/playgrounds';

export default function Home({ playground }: { playground: Playground }) {
  return (
    <div>
      <Hero />
      <PlaygroundPreview playground={playground} />
      <TrustedBy />
    </div>
  );
}

export function getServerSideProps(context: GetStaticPropsContext) {
  const playgroundData = getPlaygroundData('node-js');

  return {
    props: {
      playground: playgroundData,
    },
  };
}
