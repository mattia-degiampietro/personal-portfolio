<script>
    let experience =
    [
        {
            comp: "University of Trento",
            position: "Computer Science Degree",
            range: "2024-now"
        },
        {
            comp: "Freelancer",
            position: "Frontend Developer",
            range: "2025"
        },
        {
            comp: "HgBlu S.R.L.",
            position: "Frontend Developer",
            range: "2023-2024"
        },
        {
            comp: "NTS Blozen",
            position: "Datacenter & Cybersecurity Bootcamp Trainee",
            range: "2023"
        },
        {
            comp: "HgBlu S.R.L.",
            position: "Internship Frontend Developer",
            range: "2023-2024"
        },
    ]

</script>
<div class="grid grid-cols-1 gap-8 py-16 pb-24 md:grid-cols-12">
		<div
			data-reveal="true"
			class="md:col-span-3"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 980ms, transform 0.65s 980ms;"
		>
			<p class="font-sans text-[11px] lg:text-[13px] tracking-[2.5px] text-[#888780] uppercase">Experience</p>
		</div>
		<div
			data-reveal="true"
			class="flex flex-col gap-0 md:col-span-8 md:col-start-5"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 1050ms, transform 0.65s 1050ms;"
		>
            {#each experience as item}
                
            <div
                    class="border-border flex flex-col gap-1 border-b py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                    <div>
                        <p class="text-foreground font-sans text-[16px] lg:text-[16px]">{item.position}</p>
                        <p class="font-sans text-[13px] lg:text-[14px] text-[#888780]">{item.comp}</p>
                    </div>
                    <p class="shrink-0 font-sans text-[12px] lg:text-[13px] tracking-wide text-[#888780]">{item.range}</p>
                </div>
            {/each}     
		</div>
	</div>