import { PlaygroundContent } from '@/components/playground-content';

import { Playground } from '@/helpers/playgrounds';

export function PlaygroundPreview({ playground }: { playground: Playground }) {
  return (
    <div className="mt-24 mb-20 max-md:pt-4 max-sm:mt-12">
      <h2 className="text-4xl font-semibold mb-5">Devops&Cloud Playgrounds</h2>
      <p className="text-xl text-[#7F8A99] tracking-[0.4px]">
        Powerful, self-serve product and growth analytics to help you convert, engage, and <br />{' '}
        retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-8 bg-[#F7F9FA] p-4 border rounded-xl">
        <PlaygroundContent isMainPage playground={playground} />
      </div>
    </div>
  );
}
