import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    // Dynamically import the markdown file based on the URL slug
    const post = await import(`../../../lib/projects/${params.slug}.md`);

    return {
      // metadata contains the frontmatter (title, etc.)
      meta: post.metadata,
      // default is the actual compiled Svelte component from the markdown
      content: post.default 
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
