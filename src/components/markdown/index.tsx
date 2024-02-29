import { MathJax, MathJaxContext } from 'better-react-mathjax';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { toast } from 'sonner';

import { CopyIcon } from '@/components/ui/copy-icon';

export function Markdown({ children, mathjax = false }: { children: string; mathjax?: boolean }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="markdown"
      components={{
        h1: 'h2',
        h5: 'h4',
        h6: 'h4',
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return (
            <React.Fragment>
              {mathjax ? (
                <MathJaxContext>
                  <MathJax className="relative block border rounded-lg border-[#EAECF0] bg-primary-card py-0 px-4">
                    <span className="text-[#175CD3] text-lg text-balance block py-4 max-w-[95%]">
                      {children}
                    </span>
                    <CopyIcon
                      className="absolute top-7 right-5 cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(children as string);
                        toast.success('Code copied successfully!');
                      }}
                    />
                  </MathJax>
                </MathJaxContext>
              ) : (
                <span className="relative block border rounded-lg border-[#EAECF0] bg-primary-card py-0 px-4 my-2">
                  <span className="text-[#175CD3] text-lg text-balance block py-4 max-w-[95%]">
                    {children}
                  </span>
                  <CopyIcon
                    className="absolute top-7 right-5 cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(children as string);
                      toast.success('Code copied successfully!');
                    }}
                  />
                </span>
              )}
            </React.Fragment>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
