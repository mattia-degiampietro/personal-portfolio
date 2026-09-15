<script>
	const competenze_titoli = ['full-stack', 'embedded', 'security'];

	const competenze_complete = [
		'Frontend & Backend Web',
		'software',
		'SQL & Databases',
		'Networks',
		'C / Embedded & Hardware',
		'Cybersecurity'
	];
</script>

<section class="mx-auto px-8 pb-24 md:px-12">
	<div class="max-w-5xl">
		<div
			data-reveal="true"
			class="mb-8 font-sans text-[11px] tracking-[3px] text-[#D85A30] uppercase flex flex-row gap-5"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s, transform 0.7s;">
            {#each competenze_titoli as comp}
                <p>{comp}</p>
            {/each}
        </div>
		<h1
			data-reveal="true"
			class="text-foreground font-serif text-[clamp(52px,8vw,112px)] leading-[1.05] font-light text-balance"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s 120ms, transform 0.7s 120ms;"
		>
			Mattia<br /> Degiampietro —<br /> <em>personal portfolio</em>
		</h1>
		<div
			data-reveal="true"
			class="mt-8 flex flex-wrap gap-2"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s 240ms, transform 0.7s 240ms;"
		>
			{#each competenze_complete as comp}
				<span
					class="border-border rounded-sm border px-3 py-1 font-sans text-[11px] tracking-[1.5px] text-[#888780] uppercase"
				>
					{comp}
				</span>
			{/each}
		</div>
		<div class="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:gap-24">
			<p
				data-reveal="true"
				class="font-sans text-[14px] tracking-wide text-[#888780]"
				style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s 360ms, transform 0.7s 360ms;"
			>
				Based in Italy
			</p>
			<div
				data-reveal="true"
				class="max-w-sm"
				style="opacity: 1; transform: translateY(0px); transition: opacity 0.7s 480ms, transform 0.7s 480ms;"
			>
				<p class="font-sans text-[15px] leading-relaxed text-[#5F5E5A]">
					C for microcontrollers and React for browsers. Databases, hardened systems, packet
					analysis. The full stack — from bare metal to the browser.
				</p>
				<a
					href="/about"
					class="text-foreground mt-4 inline-block font-sans text-[13px] tracking-wide transition-colors duration-200 hover:text-[#D85A30]"
				>
					about me →
				</a>
			</div>
		</div>
	</div>
</section>
