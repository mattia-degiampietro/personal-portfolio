<script>
  let { data } = $props();
  const Component = $derived(data.content);
</script>

<!-- THIS IS YOUR CUSTOM LAYOUT -->
<article class="project-layout">
  <header>
    <h1>{data.meta.title}</h1>
    <p class="date">{data.meta.date}</p>
  </header>

  <div class="markdown-content">
    <!-- Svelte renders the markdown content directly as a component -->
	    <Component />
  </div>
</article>

<style>
  /* Style your project page however you want here */
  .project-layout {
    max-width: 800px;
    margin: 0 auto;
  }
  .markdown-content {
    line-height: 1.6;
  }
</style>
