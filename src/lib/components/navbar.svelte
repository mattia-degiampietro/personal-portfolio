<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedBurger from './AnimatedBurger.svelte';

	import { page } from '$app/state';
	import { text } from '@sveltejs/kit';

	// Define your routes
	const navLinks = [
		{ href: '/work', label: 'work' },
		{ href: '/about', label: 'about' },
		{ href: '/contact', label: 'contact' }
	];

	let mobileMenu = $state(false);

	function toggleMenu() {
		mobileMenu = !mobileMenu;
	}

	let theme = $state('');
	onMount(() => {
		const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'));
		theme = match ? match[2] : 'light';
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	});

	function toggleTheme() {
		if (theme == 'light') {
			theme = 'dark';
			saveThemeCookie('dark');
		} else if (theme == 'dark') {
			theme = 'light';
			saveThemeCookie('light');
		}
	}

	let saveThemeCookie = (theme: string) => {};
	onMount(() => {
		saveThemeCookie = (theme: string) => {
			document.cookie = 'theme=' + theme + '; max-age=31536000; path=/; SameSite=Lax';
		};
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border"
	style="height:60px"
>
	<div class="max-w-[1440px] mx-auto px-8 md:px-12 h-full flex items-center justify-between">
		<a
			class="font-serif text-base text-foreground tracking-wide hover:text-[#D85A30] transition-colors duration-200"
			onclick={() => {mobileMenu = false;}}
      		href="/"
		>
			mattia degiampietro
		</a>
		<nav class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a
					class="text-[13px] font-sans tracking-[1px] transition-colors duration-200 text-[#888780] hover:text-foreground"
					class:text-foreground={link.href === '/'
						? page.url.pathname === '/'
						: page.url.pathname.startsWith(link.href)}
					href={link.href}
				>
					{link.label}
				</a>
			{/each}

			<button
				aria-label="Cycle theme"
				onclick={toggleTheme}
				class="flex items-center gap-1.5 text-[11px] uppercase tracking-[2px] font-sans text-[#888780] hover:text-foreground transition-colors duration-200 border border-border rounded-sm px-2.5 py-1"
			>
				<span class="w-2.5 h-2.5 rounded-full border border-border transition-colors duration-300">
				</span>
				<p>{theme}</p>
			</button>
		</nav>
		<AnimatedBurger bind:open={mobileMenu} />
	</div>
</header>
<div
	id="mobile-menu"
	class="fixed inset-0 z-40 bg-background flex flex-col justify-center items-start px-10 transition-all duration-500 opacity-0"
	class:opacity-100={mobileMenu}
	class:pointer-events-none={!mobileMenu}
>
	<nav class="flex flex-col gap-8">
    {#each navLinks as link}
		<a
			class="font-serif text-5xl font-light text-foreground hover:text-[#D85A30] opacity-100 translate-y-0 transition-all duration-500"
			style="transition-delay: 0ms;"
      onclick={toggleMenu}
			href={link.href}>
        {link.label}
    </a>
    {/each}
	</nav>
	<div class="mt-16 flex flex-col gap-4">
		<button
			onclick={toggleTheme}
			id="themeToggle2"
			aria-label="Cycle theme"
			class="self-start flex items-center gap-2 text-[11px] uppercase tracking-[2px] font-sans text-[#888780] hover:text-foreground transition-colors duration-200 border border-border rounded-sm px-3 py-1.5"
		>
			<span class="w-2.5 h-2.5 rounded-full border border-border navbar-theme-btn-circle"> </span>
			<p>{theme} theme</p>
		</button>
	</div>
</div>
