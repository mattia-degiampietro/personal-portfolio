<script>
	import ProjectsList from '$lib/components/ProjectsList.svelte';

	let { data } = $props();
</script>
<section class="mx-auto max-w-[1440px] px-8 md:px-12">
    <div>
        <p class="mb-6 font-sans text-[11px] lg:text-[13px] tracking-[3px] text-[#D85A30] uppercase">portfolio</p>
        <h1 class="text-foreground font-serif text-[clamp(48px,7vw,96px)] leading-[1.05] font-light">
            selected projects
        </h1>
    </div>
</section>
<ProjectsList projects={data.projects} categories={data.categories} complete={true} />
