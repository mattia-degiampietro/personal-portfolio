---
title: Personal Portfolio Website
description: The project behind the creation of this website you are browsing right now. Take a look at how it's made.
date: 2026-10-06
tags: [web, design]
stack: [Svelte Js, Tailwind, Figma]
link_github: www.github.com
link_project: www.project.com
cover_img_light: /src/lib/assets/portfolio-mockup-light.png
cover_img_dark: /src/lib/assets/portfolio-mockup-dark.png
home: true
---
<script>
    // Recuperi le props tramite la runa di Svelte 5
    let { theme } = $props();
    import HeroImage from "../components/design-system/HeroImage.svelte";
    import TextParagraph from "../components/design-system/TextParagraph.svelte";
    // import ArticleImage from "../components/design-system/ArticleImage.svelte"
    import ArticlePalette from '../components/design-system/ArticlePalette.svelte';
    import ArticleTypography from '../components/design-system/ArticleTypography.svelte';

	let palettes = [
		{
			name: 'Light Theme Palette',
			values: [
				{ name: 'Bianca', code: '#FBF8F1' },
				{ name: 'White Beige', code: '#F1ECE2' },
				{ name: 'Jocelyn', code: '#DDD8CC' },
                { name: 'Titanium', code: '#888780' },
				{ name: 'Misty Taupe', code: '#5F5E5A' },
				{ name: 'Black Grain', code: '#2C2C2A' },
                { name: 'Flame Pea', code: '#D85A30' }
			],
            description: "Warm paper and sand tones, softened by charcoal text and a terracotta/salmon accent."
		},
        {
			name: 'Dark Theme Palette',
			values: [
				{ name: 'Shocking Black', code: '#111110' },
				{ name: 'Melanie', code: '#1A1916' },
				{ name: 'Old Black', code: '#2A2926' },
                { name: 'Labyrinth ', code: '#4E4C48' },
				{ name: 'Metallic Titanium', code: '#7A7770' },
				{ name: 'Vintage White  ', code: '#E8E4DC' },
				{ name: 'Flame Pea', code: '#D85A30' }
			],
            description: "A dark, quiet palette of deep black with off-white text, keeping the same terracotta/salmon accent as the common thread."
		}
	];

    let fonts = {
        google_fonts_link: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
        families: [
            {
                name: "Cormorant Garamond",
                display_name: "Cormorant Garamond",
                weight: 300,
                used_for: "Display / headlines / project titles"
            },
            {
                name: "DM Sans",
                display_name: "DM Sans",
                weight: 300,
                used_for: "Body / navigation / metadata"
            },
        ]
    }
</script>

<HeroImage theme={theme} cover_img_dark={cover_img_dark} cover_img_light={cover_img_light} />

<TextParagraph title="The context and the problem" subtitle="" border_bottom={false}>
    Since I started to get interested in the world of computing, I have developed many different projects, at most personal, and for years I told me I needed a site to show my works.
    However I have never created a portfolio website for me, so I finally decided that the time has come to create this project that I've been postponed all this time.
    <br><br>
    Today creating a semi-static site with AI is extremely simple and almost instantaneous. But often the results tend to be repetive and standard. Most of the developer portfolios I have seen online while I was searching for inspiration for mine have a sort of nerdy terminal or cyberpunk aesthetic, usually with an acid, fluorescent or electric palette, with monospace fonts, aggessive effects and dark mode only.
    <br><br>
    Even though I find that a very cool aesthetic, in my opinion it gives a sort unprofessional, unserious  and sometimes fatiguing look. For my personal portfolio website I wanted something more minimal and elegant, but still modern and clean.
    <br><br>
    The idea that i had in mind was primarly to give my website a light paperlike and typographic aesthetic, but at the same time remaining inside standard layouts and design patterns and provide a dark mode.
</TextParagraph>

<!-- <ArticleImage img_src="/src/lib/assets/inspo_collage.png" description="some sites i have taken isnspiration from" /> -->

<!-- <ArticleImage img_src="/src/lib/assets/inspo1.png" description="the site i have taken inspiration the most, for style and color palette" /> -->

<ArticlePalette title="Palettes" border_bottom={false} palettes={palettes} />

<ArticleTypography subtitle="Two families. A clear division of labour." fonts={fonts} />

<!-- ## 03 / Building it

The Markdown parser was the real work. Standard libraries emit generic `<h1>`, `<p>`, `<blockquote>` tags, and that breaks the editorial design on contact. I needed `## 01 / Section title` to come out of Markdown already wearing the right typographic classes and sitting on the right grid. MDX maps HTML elements to React components; Tailwind styles those.

```
// Example: Custom MDX Components Mapping in React
import { MDXProvider } from '@mdx-js/react';

const components = {
  h2: (props) => {
    // Extract the number (e.g., "01") and the title from the children
    const text = props.children.toString();
    const [number, ...rest] = text.split('/');
    
    return (
      <div className="flex flex-col md:flex-row md:gap-8 mt-16 mb-8 items-baseline">
        {rest.length > 0 && (
          <span className="font-mono text-[#B23B24] text-sm tracking-widest">
            {number.trim()}
          </span>
        )}
        <h2 className="font-serif font-normal text-3xl md:text-4xl text-[#1A1A1A]">
          {rest.length > 0 ? rest.join('/').trim() : number}
        </h2>
      </div>
    );
  },
  p: (props) => <p className="font-sans text-lg text-[#2E2E2C] leading-relaxed max-w-3xl mb-6" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 border-[#B23B24] pl-6 py-2 my-8 font-serif italic text-xl text-[#5A5A57]" {...props} />
  )
};

export default function CaseStudyLayout({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
```

The `h2` mapping does the actual work. It splits the string on `/`, hands the number to monospace terracotta, and leaves the title in serif. Every section heading on the site goes through it.

## 04 / The result

The workflow is now: write a text file, push to GitHub, let CI/CD build a typeset static page. Lighthouse reads 100 across performance, accessibility and SEO.

## 05 / What I got out of it

Writing my own parser and design system forced me to think about where content ends and presentation begins, which no framework had ever made me think about.

The site loads in under 0.8 seconds globally, off static HTML and very little client-side JavaScript. Adding a new project takes minutes instead of hours, because once the Markdown is written I never open the CSS or the layout again.

Still on the list: a syntax highlighter for the C/C++ and Rust snippets, tuned to the ivory background. Standard dark-mode code themes are too harsh against that warm page.




<style> 
    :global(.cover-img) {
        object-fit: cover;
        width: 100%;
        border: 1px solid var(--border);
        padding: 10px;
          background-clip: content-box; 
    }
</style>-->