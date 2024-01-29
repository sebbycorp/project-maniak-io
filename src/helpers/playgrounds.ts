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

  const regex = /~~~\s*([\s\S]*?)\s*~~~/g;

  const sections = Array.from(content.split(regex));

  const previewContent = sections.length > 1 ? sections[1] : null;
  const mainContent = sections.length > 1 ? sections[2] : content;

  const playgroundData = {
    slug: postSlug,
    sections,
    content: mainContent,
    previewContent: previewContent,
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
