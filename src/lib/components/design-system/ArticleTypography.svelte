<script>
	let { title = 'typography', subtitle, border_bottom = true, fonts } = $props();

	// let fonts = {
    //     google_fonts_link: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
    //     families: [
    //         {
    //             name: "Cormorant Garamond",
    //             display_name: "Cormorant Garamond",
    //             weight: 300,
    //             used_for: "Display / headlines / project titles"
    //         },
    //         {
    //             name: "DM Sans",
    //             display_name: "DM Sans",
    //             weight: 300,
    //             used_for: "Body / navigation / metadata"
    //         },
    //     ]
    // }
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href={fonts.google_fonts_link} rel="stylesheet" />
</svelte:head>

<div class="py-20 md:py-28" class:border-b={border_bottom}>
	<div class="grid grid-cols-1 md:grid-cols-12 md:gap-16">
		<div
			data-reveal="true"
			class="md:col-span-3 mb-6"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 490ms, transform 0.65s 490ms;"
		>
			<p class="text-accent font-sans text-[11px] tracking-[2.5px] uppercase lg:text-[13px]">
				{title}
			</p>
			{#if subtitle != '' && subtitle != undefined && subtitle != null}
				<p
					class="mt-5 max-w-[190px] font-sans text-[13px] leading-relaxed text-[var(--text-secondary)] lg:max-w-[250px] lg:text-[14px]"
				>
					{subtitle}
				</p>
			{/if}
		</div>
		<div class="md:col-span-7 md:col-start-6">
            {#each fonts.families as family}
                <div class="border-border mb-12 border-b pb-10">
                    <p 
                        class="text-foreground text-[clamp(36px,8vw,62px)] leading-none font-light"
                        style="font-family: {family.name}; font-weight: {family.weight}"
                    >
                        {family.display_name}
                    </p>
                    <p class="mt-3 font-sans text-[12px] tracking-[2px] text-[#888780] uppercase">
                        {family.used_for}
                    </p>
                </div>   
            {/each}
		</div>
		<!-- <div class="md:col-span-8 md:col-start-5">
            {@render children()}
            
        </div> -->
	</div>
</div>
