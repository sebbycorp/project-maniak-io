import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { twMerge } from 'tailwind-merge';

import { Markdown } from '@/components/markdown';
import { Button } from '@/components/ui/button';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';

import { cn } from '@/lib/utils';

import { Playground } from '@/helpers/playgrounds';

type PlaygroundContentProps = {
  playground: Playground;
  isMainPage?: boolean;
};

export function PlaygroundContent({ playground, isMainPage = false }: PlaygroundContentProps) {
  const [open, setOpen] = React.useState(isMainPage);

  const { toast } = useToast();

  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    isSmallScreen && setOpen(true);
  }, [isSmallScreen]);

  return (
    <div>
      {isSmallScreen ? (
        <div>
          <div>
            <h3
              className={clsx(
                twMerge(
                  'text-[48px] font-semibold text-[#101828] mt-2',
                  isMainPage && 'text-[24px]',
                ),
              )}
            >
              {playground.title}
            </h3>
            <p className="text-[#7F8A99] font-medium mt-4 mb-4">{playground.description}</p>
            <Markdown>{playground.content}</Markdown>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              className="border rounded-xl"
              src={playground.terminal}
            ></iframe>
          </div>
        </div>
      ) : (
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <ScrollArea className={clsx(open && 'h-[600px]')}>
              <div className={clsx(open && 'pr-4')}>
                <h3
                  className={clsx(
                    twMerge(
                      'text-[48px] font-semibold text-[#101828] mt-2',
                      isMainPage && 'text-[24px]',
                    ),
                  )}
                >
                  {playground.title}
                </h3>
                <p className="text-[#7F8A99] font-medium mt-4 mb-4">{playground.description}</p>
                {!open ? (
                  <Button
                    className="bg-[#2463EB] mb-6"
                    onClick={() => {
                      setOpen(true);
                      toast({
                        // @ts-ignore
                        title: (
                          <div className="flex items-center text-[#2463EB] font-semibold text-base gap-2 mb-2">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0C15.5229 0 20 4.47714 20 10ZM8.84331 15.2949L16.2627 7.87556C16.5146 7.62363 16.5146 7.21512 16.2627 6.96319L15.3503 6.05081C15.0983 5.79883 14.6898 5.79883 14.4379 6.05081L8.3871 12.1015L5.56214 9.27657C5.3102 9.02464 4.90169 9.02464 4.64972 9.27657L3.73734 10.189C3.4854 10.4409 3.4854 10.8494 3.73734 11.1013L7.93089 15.2949C8.18286 15.5469 8.59133 15.5469 8.84331 15.2949Z"
                                fill="#2463EB"
                              />
                            </svg>
                            The Playground Has Begun!
                          </div>
                        ),
                        description: (
                          <p className="ml-7 font-semibold">
                            We hope you're having a great time exploring our virtual playground!
                          </p>
                        ),
                        className: cn(
                          'bottom-4 left-4 flex fixed md:max-w-[420px] max-md:bottom-0 max-md:left-0',
                        ),
                      });
                    }}
                  >
                    Start Playground
                  </Button>
                ) : null}
                <Markdown>{playground.content}</Markdown>
              </div>
              {open ? <ScrollBar className="w-1 ml-2" /> : null}
            </ScrollArea>
          </ResizablePanel>
          {open ? <ResizableHandle withHandle /> : null}

          {open ? (
            <ResizablePanel>
              <iframe
                width="100%"
                height="600"
                className="border rounded-xl"
                src={playground.terminal}
              ></iframe>
            </ResizablePanel>
          ) : null}
        </ResizablePanelGroup>
      )}
    </div>
  );
}
