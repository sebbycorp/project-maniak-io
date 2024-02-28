import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type PostData = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  mathjax?: boolean;
};

export type Post = PostData & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    content,
    ...(data as PostData),
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts: Post[] = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts;
}
