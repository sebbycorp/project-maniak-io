import { MathJax, MathJaxContext } from 'better-react-mathjax';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import { a11yDark, darcula, dark, xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { toast } from 'sonner';

import { CopyIcon } from '@/components/ui/copy-icon';

export function Markdown({ children, mathjax = false }: { children: string; mathjax?: boolean }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm, remarkBreaks, remarkDirective, remarkRehype]}
      className="markdown"
      components={{
        code(props) {
          const { className, children } = props;
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
                <span className="relative block border-[#EAECF0] py-0 my-2">
                  <Prism
                    style={xonokai}
                    language={match ? match[1] : undefined}
                    PreTag="span"
                    className="block mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
                    showLineNumbers={true}
                    useInlineStyles={true}
                  >
                    {String(props.children).replace(/\n$/, '')}
                  </Prism>
                  <CopyIcon
                    className="absolute top-[16px] right-5 cursor-pointer "
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
