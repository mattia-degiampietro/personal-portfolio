<script>
    import { fade, fly } from 'svelte/transition';

	let showCopyBanner = $state(false);
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
		showCopyBanner = true;
		setTimeout(() => {
			showCopyBanner = false;
		}, 2000);
	}
</script>
<footer class="border-border border-t px-8 py-8 md:px-12">
	<div
		class="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 md:flex-row md:items-center"
	>
		<p class="font-sans text-[12px] tracking-wide text-[#888780]">
			© <!-- -->2026<!-- --> Mattia Degiampietro. All rights reserved.
		</p>
		<div class="flex items-center gap-6">
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-foreground font-sans text-[12px] tracking-[1px] text-[#888780] transition-colors duration-200"
				href="https://github.com">GitHub</a
			><a
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-foreground font-sans text-[12px] tracking-[1px] text-[#888780] transition-colors duration-200"
				href="https://linkedin.com">LinkedIn</a
			><a
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-foreground font-sans text-[12px] tracking-[1px] text-[#888780] transition-colors duration-200"
				href="https://dribbble.com">CV</a
			>
            <div class="text-[12px]">
                <p
                    class="font-sans text-[10px] tracking-[2px] text-[#D85A30] uppercase opacity-0 transition-opacity duration-500"
                    class:opacity-100={showCopyBanner}
                >
                    Copied to clipboard
                </p>
                <a
                    href={"copy:" + mail}
			        onclick={handleCopy}
                    class="hover:text-foreground font-sans text-[12px] tracking-[1px] text-[#888780] transition-colors duration-200"
                    >{mail}</a
                >
                <p class="text-[10px] opacity-0">.</p>
            </div>

		</div>
	</div>
</footer>
