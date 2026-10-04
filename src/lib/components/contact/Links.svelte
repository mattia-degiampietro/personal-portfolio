<script>
	import { fade, fly } from 'svelte/transition';

	let showBanner = $state(false);
	let mail = 'mattia.degiampietro@gmail.com';

	/**
	 * @param {MouseEvent} event
	 */
	function handleCopy(event) {
		// 1. Manually stop the link navigation right away
		event.preventDefault(); 

		// 2. Try the modern Clipboard API if available (HTTPS / localhost)
		if (navigator.clipboard && window.isSecureContext) {
			navigator.clipboard
				.writeText(mail)
				.then(() => triggerBanner())
				.catch((err) => {
					console.error('Modern copy failed, trying fallback:', err);
					fallbackCopy(mail);
				});
		} else {
			// 3. Fallback for HTTP environments or unsupported mobile browsers
			fallbackCopy(mail);
		}
	}

	/**
	 * Legacy fallback using a temporary off-screen textarea
	 * @param {string} text
	 */
	function fallbackCopy(text) {
		try {
			const textArea = document.createElement('textarea');
			textArea.value = text;
			
			// Position off-screen so the user doesn't see it flicker
			textArea.style.position = 'fixed';
			textArea.style.top = '-9999px';
			document.body.appendChild(textArea);
			
			textArea.focus();
			textArea.select();
			
			const successful = document.execCommand('copy');
			document.body.removeChild(textArea);

			if (successful) {
				triggerBanner();
			} else {
				console.error('Fallback copy command was unsuccessful');
			}
		} catch (err) {
			console.error('Fallback copy execution failed:', err);
		}
	}

	function triggerBanner() {
		showBanner = true;
		setTimeout(() => {
			showBanner = false;
		}, 2000);
	}
</script>

<div class="border-border grid grid-cols-1 gap-16 border-b py-16 md:grid-cols-2 md:py-24">
	<div
		data-reveal="true"
		style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 300ms, transform 0.65s 300ms;"
	>
		<p class="mb-4 font-sans text-[11px] lg:text-[13px] tracking-[2.5px] text-[#888780] uppercase">Email</p>
		
		<!-- 
		  onclick automatically captures both touch/tap and standard clicks seamlessly.
		-->
		<a
			href={"copy:" + mail}
			onclick={handleCopy}
			class="text-foreground border-foreground border-b pb-1 font-serif text-[clamp(22px,3vw,40px)] font-light transition-colors duration-200 hover:border-[#D85A30] hover:text-[#D85A30]"
		>
			{mail}
		</a>

		<p
			aria-live="polite"
			class="mt-4 font-sans text-[12px] lg:text-[14px] tracking-[2px] text-[#D85A30] uppercase opacity-0 transition-opacity duration-500"
			class:opacity-100={showBanner}
		>
			Mail address copied to clipboard
		</p>
	</div>

	<!-- Rest of elsewhere layout stays identical -->
	<div
		data-reveal="true"
		style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 400ms, transform 0.65s 400ms;"
	>
		<p class="mb-4 font-sans text-[11px] lg:text-[13px] tracking-[2.5px] text-[#888780] uppercase">Elsewhere</p>
		<div class="flex flex-col gap-0">
			<a
				href="https://github.com/mattia-degiampietro"
				target="_blank"
				rel="noopener noreferrer"
				class="group border-border flex items-center justify-between border-b py-3 transition-colors duration-200 hover:border-[#D85A30]"
				><span
					class="text-foreground font-sans text-[15px] lg:text-[16px] transition-colors duration-200 group-hover:text-[#D85A30]"
					>GitHub</span
				><span
					class="text-[#888780] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#D85A30]"
					>→</span
				></a
			><a
				href="https://www.linkedin.com/in/mattia-degiampietro"
				target="_blank"
				rel="noopener noreferrer"
				class="group border-border flex items-center justify-between border-b py-3 transition-colors duration-200 hover:border-[#D85A30]"
				><span
					class="text-foreground font-sans text-[15px] lg:text-[16px] transition-colors duration-200 group-hover:text-[#D85A30]"
					>LinkedIn</span
				><span
					class="text-[#888780] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#D85A30]"
					>→</span
				></a
			><a
				href="https://read.cv"
				target="_blank"
				rel="noopener noreferrer"
				class="group border-border flex items-center justify-between border-b py-3 transition-colors duration-200 hover:border-[#D85A30]"
				><span
					class="text-foreground font-sans text-[15px] lg:text-[16px] transition-colors duration-200 group-hover:text-[#D85A30]"
					>Download CV</span
				><span
					class="text-[#888780] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#D85A30]"
					>→</span
				></a
			>
		</div>
	</div>
</div>
