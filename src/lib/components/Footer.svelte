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
<footer class="border-border border-t md:px-12">
	<div
		class="mx-auto flex max-w-[1440px] px-8 py-4 flex-col items-start justify-between gap-2 md:flex-row md:items-center"
	>
		<p class="font-sans text-[12px] lg:text-[13px] tracking-wide text-muted-foreground">
			© <!-- -->2026<!-- --> Mattia Degiampietro. All rights reserved.
		</p>
	</div>
</footer>
