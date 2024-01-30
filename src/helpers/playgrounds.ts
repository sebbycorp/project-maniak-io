import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type PlaygroundData = {
  title: string;
  description: string;
  category: string;
};

export type Playground = PlaygroundData & {
  slug: string;
  content: string;
  previewContent: string | null;
};

const postsDirectory = path.join(process.cwd(), 'playgrounds');

export function getPlaygroundsFiles() {
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
  const playgroundsFiles = getPlaygroundsFiles();

  const allPlaygrounds = playgroundsFiles.map((playgroundFile) => {
    return getPlaygroundData(playgroundFile);
  });

  return allPlaygrounds;
}
