<script>
	import ListParagraph from "../design-system/ListParagraph.svelte";


	const competences = [
		{
			title: 'Web - Full-Stack',
			content:
				'HTML / CSS / Tailwind · Figma / Design systems · Javascript / TypeScript · Svelte.js / SvelteKit · Node.js / Express · REST APIs · Docker · Cloudflare infrastructure'
		},
        {
            title: 'Software Engineering',
            content:
                'OOP & Design Patterns · Clean Architecture · Microservices / Event-Driven · Git · Refactoring & Code Quality'
        },
        {
			title: 'Databases & SQL',
			content:
				'MySQL / MariaDB · SQLite · MongoDB / Atlas · Oracle PL/SQL · Query optimisation · Schema design'
		},
        {
            title: 'Embedded Systems',
			content:
            'C / C++ · Microcontrollers (ESP32, STM32, Noridc chips) · RTOS / FreeRTOS · USB & Wireless Comunication · Serial protocols (UART, SPI, I²C) · Assembly (ARM, x86, Risc-V) · Circuit desing'
		},
        {
            title: 'Cybersecurity',
            content:
                'Network security · OWASP Top 10 · Secure coding practices · System administration'
        },
        {
            title: 'Networks',
            content:
                'TCP/IP stack · Routing & switching · Wireshark / packet analysis · DNS / HTTP / TLS · VPN / firewall config · Linux networking'
        },
        {
            title: 'Non technical & Soft Skills',
            content:
                'Italian (native) · English (B2 Cambrige) · Problem-Solving · Collaboration & Teamwork · Time management · Continuous learning'
        },
	];
</script>

<ListParagraph title="Competences" subtitle="A working map of the systems, tools, and disciplines I move between." list={competences} />
