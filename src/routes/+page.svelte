<script>
	import Hero from "$lib/components/home/Hero.svelte";
	import ProjectsList from "$lib/components/ProjectsList.svelte";

    let { data } = $props();
</script>
<Hero />
<ProjectsList projects={data.projects} complete={false}/>