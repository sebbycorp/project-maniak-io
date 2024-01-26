import { Post } from '@/helpers';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';

export function PostContent({ post }: { post: Post }) {
  const { title, image, date, slug, readTime, content } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // const imagePath = `/images/posts/${slug}/${image}`;

  // const customRenderers = {

  //     p(paragraph: { node: any, children: string | string[] }) {
  //         const { node } = paragraph;

  //         if (node.children[0].tagName === 'img') {
  //             const image = node.children[0];

  //             return (
  //                 <div>
  //                     <Image
  //                         src={imagePath}
  //                         alt={image.alt}
  //                         width={600}
  //                         height={300}
  //                     />
  //                 </div>
  //             );
  //         }

  //         return <p>{paragraph.children}</p>;
  //     },

  //     code(code: { className: string; children: string | string[] }) {
  //         const { className, children } = code;
  //         const language = className.split('-')[1];
  //         return (
  //             <SyntaxHighlighter
  //                 style={atomDark}
  //                 language={language}>
  //                 {children}
  //             </SyntaxHighlighter>
  //         );
  //     },
  // };

  return (
    <>
      <div className="w-full px-12 py-4 font-Bai ">
        {title}
        <div className="flex my-4">
          {/* <BsArrowLeft className='w-5 h-5 mx-2 my-auto' /> */}
          <span className="hover:font-semibold">
            <Link href="/posts">Back to Posts</Link>
          </span>
        </div>
        <div className="md:w-3/5 my-6 mx-auto  text-gray-800 font-Rubik  ">
          {/* <Image src={imagePath}  alt='post image' className='rounded-2xl border-2 shadow-md' /> */}
          <h1 className="text-4xl font-semibold my-3 font-Bai text-center">{title}</h1>
          <h2 className="text-xl font-medium font-Bai text-center text-gray-500">
            {formattedDate}- {readTime} read
          </h2>{' '}
          <hr />
          <article className="prose prose-slate prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 lg:prose-lg my-4">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          <hr />
        </div>
      </div>
    </>
  );
}
