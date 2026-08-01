export async function load() {
  // 1. Fetch all markdown files in the projects folder
  const paths = import.meta.glob('/src/lib/projects/*.md', { eager: true });
  
  const projects = [];

  // 2. Loop through them to extract the frontmatter data and create a slug
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1).replace('.md', '');
    
    if (file && typeof file === 'object' && 'metadata' in file) {
      const metadata = file.metadata;
      projects.push({ ...metadata, slug });
    }
  }

  // 3. Sort by date (optional, but usually desired)
  projects.sort((a, b) => new Date(b.date) - new Date(a.date));

  return { projects };
}
