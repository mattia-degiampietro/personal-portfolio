<script>
	let { title = 'palette', subtitle, border_bottom = true, palettes } = $props();

    // EXAMPLE
	// let palettes = [
	// 	{
	// 		name: 'Palette 1',
	// 		values: [
	// 			{ name: 'Cream', code: '#FBF8F1' },
	// 			{ name: 'White', code: '#FFFFFF' },
	// 			{ name: 'Ink', code: '#111110' },
	// 			{ name: 'Terracotta', code: '#D85A30' },
	// 			{ name: 'Warm grey', code: '#888780' }
	// 		],
    //         description: "The cream theme is the default: warm enough to feel human, neutral enough to let the worklead. White sharpens the same system, while dark inverts it for a low-light reading mode."
	// 	},
    //     {
	// 		name: 'Palette 2',
	// 		values: [
	// 			{ name: 'Cream', code: '#FBF8F1' },
	// 			{ name: 'White', code: '#FFFFFF' },
	// 			{ name: 'Ink', code: '#111110' },
	// 			{ name: 'Terracotta', code: '#D85A30' },
	// 			{ name: 'Warm grey', code: '#888780' }
	// 		],
    //         description: "The cream theme is the default: warm enough to feel human, neutral enough to let the worklead. White sharpens the same system, while dark inverts it for a low-light reading mode."
	// 	}
	// ];
</script>

<div class="pt-20 md:pt-28" class:border-b={border_bottom}>
	<div class="grid grid-cols-1 md:grid-cols-12 md:gap-16">
		<div
			data-reveal="true"
			class="md:col-span-3"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 490ms, transform 0.65s 490ms;"
		>
			<p
				class="font-sans text-[11px] tracking-[2.5px] text-accent uppercase lg:text-[13px]"
			>
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
            {#each palettes as palette}
                <p
                    class="my-5 max-w-[190px] font-sans text-[15px] leading-relaxed text-[var(--text-secondary)] lg:max-w-[250px] lg:text-[15px]"
                >
                    {palette.name}
                </p>
                <div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
                    {#each palette.values as color}
                        <div>
                            <div
                                class="border-border aspect-square rounded-sm border"
                                style:background-color={color.code}
                            ></div>
                            <p class="text-foreground mt-3 font-sans text-[12px]">{color.name}</p>
                            <p class="mt-1 font-mono text-[11px] text-muted-foreground">{color.code}</p>
                        </div>
                    {/each}
                </div>
                <p class="mt-5 mb-10 font-sans text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {palette.description}
                </p> 
            {/each}
			
		</div>
		<!-- <div class="md:col-span-8 md:col-start-5">
            {@render children()}
            
        </div> -->
	</div>
</div>
