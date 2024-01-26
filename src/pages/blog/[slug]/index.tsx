import { PostContent } from '@/components/post-content';
import { Post, getPostData, getPostsFiles } from '@/helpers';
import { GetStaticPropsContext } from 'next';

interface Params {
  slug: string;
}

export default function BlogPage({ post }: { post: Post }) {
  console.log(post);
  return (
    <>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const { slug } = params as unknown as Params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postsFileNames = getPostsFiles();

  const postsSlugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: postsSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
