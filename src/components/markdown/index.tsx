import React from 'react';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

import { CopyIcon } from '../ui/copy-icon';

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      className="markdown"
      components={{
        h1: 'h2',
        h5: 'h4',
        h6: 'h4',
        code(props) {
          const { children } = props;

          return (
            <div className="relative border rounded-lg border-[#EAECF0] bg-[#F9FAFB] py-0 px-4">
              <p className="text-[#175CD3] py-4 max-w-[95%]">{children}</p>
              <CopyIcon
                className="absolute top-7 right-5 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(children as string);
                  toast.success('Code copied successfully!');
                }}
              />
            </div>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
