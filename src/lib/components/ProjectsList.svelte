<script>
	let { projects, categories = [], complete } = $props();

    let active_filter = $state("");
</script>

{#if complete}
    <section class="mx-auto max-w-[1440px] px-8 pb-24 md:px-12">
        <div class="mt-10 flex flex-wrap gap-4 pb-16">
            <button
                class="border-b pb-0.5 font-sans text-[11px] lg:text-[13px] tracking-[2px] uppercase transition-all duration-200 {active_filter === '' 
                    ? 'text-foreground border-foreground' 
                    : 'text-muted-foreground border-transparent hover:text-foreground hover:border-[#888780]'}"
                onclick={() => { active_filter = "" }}
            ><span class="-mr-[2px]">all</span></button>

            {#each categories as cat}
                <button
                    class="border-b pb-0.5 font-sans text-[11px] lg:text-[13px] tracking-[2px] uppercase transition-all duration-200 {active_filter === cat 
                        ? 'text-foreground border-foreground' 
                        : 'text-muted-foreground border-transparent hover:text-foreground hover:border-[#888780]'}"
                    onclick={() => { active_filter = cat }}
                ><span class="-mr-[2px]">{cat}</span></button>   
            {/each}
        </div>
        <div>
            {#each projects as project, i}
                {#if project.tags.includes(active_filter) || active_filter == ""}
                    <a
                        data-row="true"
                        class="group border-border flex items-center justify-between border-t py-6 transition-colors duration-300 hover:border-[#D85A30]"
                        href={"/work/" + project.slug}
                        style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
                        ><div class="flex min-w-0 flex-1 items-baseline gap-6 md:gap-10">
                            <span class="w-6 shrink-0 font-serif text-[13px] lg:text-[15px] text-muted-foreground">{i + 1}</span>
                            <div class="min-w-0">
                                <h2
                                    class="text-foreground truncate font-serif text-[clamp(22px,3.5vw,44px)] leading-tight font-light transition-colors duration-300 group-hover:text-accent"
                                >
                                    {project.title}
                                </h2>
                            </div>
                        </div>
                        <div class="ml-4 flex shrink-0 items-center gap-6">
                            <div
							class="hidden flex-row gap-3 font-sans text-[12px] lg:text-[13px] tracking-wide text-muted-foreground md:flex"
						>
							{#each project.tags as tag}
								<p>{tag}</p>
							{/each}
							<p>{ project.date.slice(0, 4)}</p>
						</div>
                            <span
                                class="text-lg text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
                                >→</span
                            >
                        </div>
                    </a>
                {/if}
            {/each}
            <div class="border-border border-t pb-24"></div>
        </div>
    </section>
{:else}
	<section class="mx-auto max-w-[1440px] px-8 pb-24 md:px-12">
		<div
			data-row="true"
			class="border-border mb-4 flex items-center justify-between border-t pt-8"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s, transform 0.6s;"
		>
			<span class="font-sans text-[11px] lg:text-[13px] tracking-[3px] text-accent uppercase"
				>selected work</span
			>
		</div>
		<div>
			{#each projects as project, i}
				<a
					data-row="true"
					class="group border-border flex cursor-pointer items-center justify-between border-t py-5 transition-colors duration-300 hover:border-[#D85A30]"
					href={"/work/" + project.slug}
					style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s 80ms, transform 0.6s 80ms;"
					><div class="flex min-w-0 flex-1 items-baseline gap-6 md:gap-10">
						<span class="w-6 shrink-0 font-serif text-[13px] lg:text-[15px] text-muted-foreground">{i + 1}</span>
						<h2
							class="text-foreground truncate font-serif text-[clamp(20px,3.5vw,40px)] leading-tight font-light text-balance transition-colors duration-300 group-hover:text-accent"
						>
							{project.title}
						</h2>
					</div>
					<div class="ml-4 flex shrink-0 items-center gap-6">
						<div
							class="hidden flex-row gap-3 font-sans text-[12px] lg:text-[13px] tracking-wide text-muted-foreground md:flex"
						>
							{#each project.tags as tag}
								<p>{tag}</p>
							{/each}
							<p>{ project.date.slice(0, 4)}</p>
						</div>
						<span
							class="text-lg text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
						>
							→
						</span>
					</div>
				</a>
			{/each}
			<div
				data-row="true"
				class="border-border border-t pt-8"
				style="opacity: 1; transform: translateY(0px); transition: opacity 0.6s 400ms, transform 0.6s 400ms;"
			>
				<a
					class="hover:text-foreground font-sans text-[13px] lg:text-[14px] tracking-wide text-muted-foreground transition-colors duration-200"
					href="/work">view all work →</a
				>
			</div>
		</div>
	</section>
{/if}
