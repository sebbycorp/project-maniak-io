import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PlaygroundData = {
  title: string;
  description: string;
  category: string;
};

export type Playground = PlaygroundData & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'playgrounds');

export function getPlaygroundFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPlaygroundData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const playgroundData = {
    slug: postSlug,
    content,
    ...(data as PlaygroundData),
  };

  return playgroundData;
}

export function getAllPlaygrounds() {
  const playgroundFiles = getPlaygroundFiles();

  const allPlaygrounds: Playground[] = playgroundFiles.map((playgroundFile) => {
    return getPlaygroundData(playgroundFile);
  });

  return allPlaygrounds;
}
