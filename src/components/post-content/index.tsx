import { CopyIcon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LinearGradient } from '@/components/ui/linear-gradient';

import { Post } from '@/helpers/posts';

import { Markdown } from '../markdown';
import avatar from '/public/avatar/avatar.jpg';

export function PostContent({ post }: { post: Post }) {
  const { title, tags, date, content } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <div className="w-screen relative py-24 bg-[#F9FAFB] flex items-center justify-center">
        <div className="container max-w-[960px] flex flex-col items-center">
          {tags ? (
            <div className="inline-flex gap-1 items-center justify-center bg-[#EFF4FF] rounded-[24px] p-2">
              {tags.map((tag, i) => (
                <Badge className="bg-white text-xs" key={i}>
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
          <h1 className="text-5xl font-semibold my-3 font-Bai text-center tracking-[0.96px] leading-[60px] max-sm:text-4xl">
            {title}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <Avatar className="h-12 w-12">
              <Image src={avatar} alt="avatar" />
            </Avatar>
            <div className="flex flex-col">
              <p className="text-[#101828] font-semibold">Sebastian Maniak</p>
              <p className="text-[#1018284d] font-medium">{date ? formattedDate : null}</p>
            </div>
          </div>
        </div>
        <LinearGradient className="w-screen absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
        <div></div>
      </div>
      <div>
        <article className={clsx(content && 'py-24 max-sm:py-12', 'container', 'max-w-3xl')}>
          <Markdown>{content}</Markdown>
        </article>
        <hr />
      </div>
    </div>
  );
}
