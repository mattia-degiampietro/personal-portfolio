<script>
	import { onMount } from 'svelte';
	import portrait_dark from '$lib/assets/portrait_dark.jpg'
	import portrait_light from '$lib/assets/portrait_light.jpg'

	// 1. Definiamo uno stato reattivo per memorizzare il tema corrente
	let currentTheme = $state('light');

	onMount(() => {
		// Otteniamo l'elemento radice (di solito il tag <html>)
		const targetNode = document.documentElement;

		// 2. Leggiamo il valore iniziale al montaggio del componente
		currentTheme = targetNode.getAttribute('data-theme') || 'light';

		// 3. Configuriamo un MutationObserver per ascoltare i cambi di attributo
		const observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
					currentTheme = targetNode.getAttribute('data-theme') || 'light';
				}
			}
		});

		// Avviamo l'osservazione solo per l'attributo data-theme
		observer.observe(targetNode, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		// 4. Pulizia automatica quando il componente viene smontato
		return () => observer.disconnect();
	});
</script>

<div
	class="border-border grid grid-cols-1 gap-12 border-b py-16 md:grid-cols-12 md:gap-16 md:py-24"
>
	<div
		data-reveal="true"
		class="md:col-span-4"
		style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 140ms, transform 0.65s 140ms;"
	>
		<div class="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--card)]">
			<!-- <div class="absolute inset-0 flex items-end p-6">
				<p class="font-sans text-[11px] tracking-[2px] text-muted-foreground uppercase">Italy — 2025</p>
			</div> -->
			<img src={currentTheme == "light" ? portrait_light : portrait_dark} alt="">
		</div>
	</div>
	<div class="flex flex-col justify-center gap-6 md:col-span-7 md:col-start-6">
		<p
			data-reveal="true"
			class="font-sans text-[16px] leading-relaxed text-[var(--text-secondary)]"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 210ms, transform 0.65s 210ms;"
		>
			My interest in technology was born when I started creating websites as a teenager, which led
			me to choose to study Computer Science at university, a course I’m currently finishing in
			Italy at the University of Trento.
		</p>
		<p
			data-reveal="true"
			class="font-sans text-[16px] leading-relaxed text-[var(--text-secondary)]"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 280ms, transform 0.65s 280ms;"
		>
			Through various personal projects I have developed a keen interest in programming both at high
			and low-level: I mainly focus on Web App, Backend Development and Embedded Systems, and I have
			hands-on experience with Linux systems and Network security.
		</p>
		<p
			data-reveal="true"
			class="font-sans text-[16px] leading-relaxed text-[var(--text-secondary)]"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 350ms, transform 0.65s 350ms;"
		>
			I like to challenge myself on real-world problems and I’m always willing to talk or
			collaborate on interesting projects.
		</p>
		<div
			data-reveal="true"
			class="pt-2"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 420ms, transform 0.65s 420ms;"
		>
			<a
				class="text-foreground border-foreground border-b pb-0.5 font-sans text-[13px] tracking-wide transition-colors duration-200 hover:border-[#D85A30] hover:text-accent"
				href="/contact">Contact →</a
			>
		</div>
	</div>
</div>
