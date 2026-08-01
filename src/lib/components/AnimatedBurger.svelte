 <script>
    let { open = $bindable() } = $props();

    function handleClick() {
        open = !open;
    }
</script>


<button
  class="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
  aria-label="Open menu"
  onclick={handleClick}
>
    <span 
        class="block w-5 h-px bg-foreground transition-all duration-300"
        class:rotate-45={open}
        class:translate-y-[6px]={open}
    ></span>
    <span 
        class="block w-5 h-px bg-foreground transition-all duration-300"
        class:opacity-0={open}
    ></span>
    <span 
        class="block w-5 h-px bg-foreground transition-all duration-300"
        class:-rotate-45={open}
        class:-translate-y-[6px]={open}
    ></span>
</button>
