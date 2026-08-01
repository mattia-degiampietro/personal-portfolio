<script>
  let { data } = $props();
</script>

<h1>My Work</h1>

<ul>
  {#each data.projects as project}
    <li>
      <!-- The link points to our dynamic [slug] route -->
      <a href="/work/{project.slug}">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </a>
    </li>
  {/each}
</ul>
