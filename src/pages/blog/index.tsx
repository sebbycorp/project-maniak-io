import { getAllPosts, Post } from '@/helpers';

export default function Blog({ posts }: { posts: Post[] }) {
  return <></>;
}

export const getStaticProps = () => {
  const data = getAllPosts();
  return {
    props: {
      posts: data,
    },
  };
};
