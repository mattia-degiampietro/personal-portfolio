<script lang="ts">
    import type { Snippet } from 'svelte';

    let { title, subtitle, border_bottom = true, children }: {title: string, subtitle: string, border_bottom: boolean, children: Snippet } = $props();

</script>



<div class="pt-20 md:pt-28" class:border-b={border_bottom}>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
		<div
			data-reveal="true"
			class="md:col-span-3"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 490ms, transform 0.65s 490ms;"
		>
			<p class="font-sans text-[11px] lg:text-[13px] tracking-[2.5px] uppercase text-accent">{title}</p>
			{#if subtitle != ""}
                <p class="mt-5 max-w-[190px] font-sans text-[13px] lg:text-[14px] lg:max-w-[250px] leading-relaxed text-[var(--text-secondary)]">
                    {subtitle}
                </p>
            {/if}
           
		</div>
        <div class="flex flex-col justify-center gap-6 md:col-span-7 md:col-start-6">
            <p data-reveal="true"
                class="font-sans text-[16px] leading-relaxed text-[var(--text-secondary)]"
                style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 350ms, transform 0.65s 350ms;"
            >{@render children()}</p>
        </div> 
		<!-- <div class="md:col-span-8 md:col-start-5">
            {@render children()}
            
        </div> -->
	</div>
</div>
