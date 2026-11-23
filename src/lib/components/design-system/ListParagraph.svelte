<script>
	// const list = [
	// 	{
	// 		title: 'Web - Full-Stack',
	// 		content:
	// 			'HTML / CSS / Tailwind · Figma / Design systems · Javascript / TypeScript · Svelte.js / SvelteKit · Node.js / Express · REST APIs · Docker · Cloudflare infrastructure'
	// 	},
    //     {
    //         title: 'Software Engineering',
    //         content:
    //             'OOP & Design Patterns · Clean Architecture · Microservices / Event-Driven · Git · Refactoring & Code Quality'
    //     },
    //     {
	// 		title: 'Databases & SQL',
	// 		content:
	// 			'MySQL / MariaDB · SQLite · MongoDB / Atlas · Oracle PL/SQL · Query optimisation · Schema design'
	// 	},
    //     {
    //         title: 'Embedded Systems',
	// 		content:
    //         'C / C++ · Microcontrollers (ESP32, STM32, Noridc chips) · RTOS / FreeRTOS · USB & Wireless Comunication · Serial protocols (UART, SPI, I²C) · Assembly (ARM, x86, Risc-V) · Circuit desing'
	// 	},
    //     {
    //         title: 'Cybersecurity',
    //         content:
    //             'Network security · OWASP Top 10 · Secure coding practices · System administration'
    //     },
    //     {
    //         title: 'Networks',
    //         content:
    //             'TCP/IP stack · Routing & switching · Wireshark / packet analysis · DNS / HTTP / TLS · VPN / firewall config · Linux networking'
    //     },
    //     {
    //         title: 'Non technical & Soft Skills',
    //         content:
    //             'Italian (native) · English (B2 Cambrige) · Problem-Solving · Collaboration & Teamwork · Time management · Continuous learning'
    //     },
	// ];

    let { list, title, subtitle } = $props();

</script>

<div class="border-border border-b py-20 md:py-28">
	<div class="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
		<div
			data-reveal="true"
			class="md:col-span-3"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 490ms, transform 0.65s 490ms;"
		>
			<p class="font-sans text-[11px] lg:text-[13px] tracking-[2.5px] text-accent uppercase">{title}</p>
			<p
				class="mt-5 md:max-w-[190px] font-sans text-[13px] lg:text-[14px] lg:max-w-[250px] leading-relaxed text-[var(--text-secondary)]"
			>
				{subtitle}
			</p>
		</div>
		<div class="md:col-span-8 md:col-start-5">
            {#each list as item, i}
                <div
                    data-reveal="true"
                    class="group border-border grid grid-cols-[34px_1fr] gap-4 border-b py-6 first:pt-0 last:border-b-0 md:grid-cols-[52px_1fr] md:gap-6"
                    style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 630ms, transform 0.65s 630ms;"
                >
                    <p class="pt-0.5 font-serif text-[18px] leading-none text-accent">0{i+1}</p>
                    <div>
                        <h2
                            class="text-foreground font-serif text-[clamp(24px,3vw,36px)] leading-none font-light transition-colors duration-300"
                        >
                            {item.title}
                        </h2>
                        <p
                            class="mt-3 max-w-2xl font-sans text-[13px] lg:text-[14px] leading-relaxed text-[var(--text-secondary)]"
                        >
                            {item.content}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
	</div>
</div>
