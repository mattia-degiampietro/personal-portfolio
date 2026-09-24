<script>
	import Competences from "$lib/components/about/Competences.svelte";
	import Experience from "$lib/components/about/Experience.svelte";
import Hero from "$lib/components/about/Hero.svelte";
	import Story from "$lib/components/about/Story.svelte";

</script>
<div class="mx-auto px-8 md:px-12">
    <!-- Hero section -->
	<Hero />

    <!-- Img and description -->
	<Story />
    
    <!-- Competences and skills -->
     <Competences />

     <!-- Experience section -->
	<Experience />
</div>
