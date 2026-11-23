<script>
	import TLDRTable from '$lib/components/design-system/TLDRTable.svelte';
	import { onMount } from 'svelte';
	let { data } = $props();
	const Component = $derived(data.content);

    const links = Object.entries(data.meta)
        .filter(([key]) => key.startsWith("link_"))
        .map(([key, value]) => [key.replace("link_", ""), value]);
    
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

 <!-- Hero Section -->
 <section class="mx-auto max-w-[1440px] px-8 md:px-12 mb-16">
    <a class="inline-flex text-[11px] lg:text-[13px] uppercase tracking-[2.5px] font-sans text-muted-foreground hover:text-accent transition-colors mb-10" href="/work">← back to work</a>
    <div class="mb-5">
        <div
			data-reveal="true"
			class="mb-8 flex flex-row gap-5 font-sans text-[11px] lg:text-[13px] tracking-[3px] text-accent uppercase"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s, transform 0.7s;"
		>
			{#each data.meta.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
        <h1 class="text-foreground font-serif text-[clamp(48px,7vw,96px)] leading-[1.05] font-light">
            {data.meta.title}
        </h1>
    </div>
    <TLDRTable stack={data.meta.stack} links={links} timeline/>
</section>
<article>
    <div class="markdown-content mx-auto max-w-[1440px] px-8 md:px-12">
        <!-- Svelte renders the markdown content directly as a component -->
        <Component theme={currentTheme} />
    </div>
</article>

<!-- Content -->
<!-- <article class="project-layout">
	<div class="markdown-content">
		<Component />
	</div>
</article> -->

<style>
	/* Style your project page however you want here */
	.project-layout {
		max-width: 800px;
		margin: 0 auto;
	}

	.markdown-content {
		line-height: 1.6;
	}

	/* ==========================================
    DEFAULT / MOBILE STYLES (Under 768px)
    ========================================== */
	:global(.markdown-content h1) {
		font-size: 28px;
		line-height: 32px;
		font-weight: 700;
		margin-bottom: 16px;
	}

	:global(.markdown-content h2) {
		font-size: 22px;
		line-height: 28px;
		font-weight: 700;
		margin-top: 24px;
		margin-bottom: 12px;
	}

	:global(.markdown-content h3) {
		font-size: 19px;
		line-height: 26px;
		font-weight: 600;
		margin-top: 20px;
		margin-bottom: 8px;
	}

	:global(.markdown-content h4) {
		font-size: 17px;
		line-height: 24px;
		font-weight: 600;
		margin-top: 16px;
		margin-bottom: 6px;
	}

	/* :global(.markdown-content p) {
		font-size: 15px;
		line-height: 24px;
		margin-bottom: 16px;
        text-align: justify
	} */

	/* ==========================================
    TABLET STYLES (768px and up - md:)
    ========================================== */
	@media (min-width: 768px) {
		:global(.markdown-content h1) {
			font-size: 32px;
			line-height: 38px;
		}

		:global(.markdown-content h2) {
			font-size: 25px;
			line-height: 32px;
		}

		:global(.markdown-content h3) {
			font-size: 21px;
			line-height: 28px;
		}

		/* :global(.markdown-content p) {
			font-size: 16px;
			line-height: 26px;
            text-align: justify
		} */
	}

	/* ==========================================
    DESKTOP STYLES (1024px and up - lg:)
    ========================================== */
	@media (min-width: 1024px) {
		:global(.markdown-content h1) {
			font-size: 38px;
			line-height: 44px;
		}

		:global(.markdown-content h2) {
			font-size: 28px;
			line-height: 36px;
		}

		:global(.markdown-content h3) {
			font-size: 24px;
			line-height: 30px;
		}

		:global(.markdown-content h4) {
			font-size: 22px;
			line-height: 28px;
		}

        /* :global(.markdown-content p) {
			font-size: 17px;
			line-height: 26px;
            text-align: justify
		} */
	}
</style>
