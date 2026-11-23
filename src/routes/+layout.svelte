<script lang="ts">
	import { onMount } from 'svelte';
	import './layout.css';
	import '../styles/global.css';
	import favicon from '/static/images/favicon.png';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'));
		const theme = match ? match[2] : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	});

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Navbar />
<div class="page-enter mx-auto mt-[60px] max-w-[1440px] pt-21">
	{@render children()}
</div>
<Footer />
