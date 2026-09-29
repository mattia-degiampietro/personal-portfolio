<script>
	let { data } = $props();
	const Component = $derived(data.content);
</script>

<!-- THIS IS YOUR CUSTOM LAYOUT -->
<article class="project-layout">
	<div class="markdown-content">
		<!-- Svelte renders the markdown content directly as a component -->
		<h1>{data.meta.title}</h1>
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

	:global(.markdown-content p) {
		font-size: 15px;
		line-height: 24px;
		margin-bottom: 16px;
	}

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

		:global(.markdown-content p) {
			font-size: 16px;
			line-height: 26px;
		}
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
			font-size: 22px;
			line-height: 30px;
		}

		:global(.markdown-content h4) {
			font-size: 19px;
			line-height: 26px;
		}
	}
</style>
