<script>
    let {img_src, description} = $props();
</script>

<div class="py-5 md:py-8">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-16">
        <div class="flex flex-col justify-center gap-6 md:col-span-7 cover-img">
            <img 
            src={img_src}
            class="max-w-full max-h-full object-contain"
            alt={description}
            />
        </div> 
		<div
			data-reveal="true"
			class="md:col-span-3 text-[var(--text-secondary)]"
			style="opacity: 1; transform: translateY(0px); transition: opacity 0.65s 490ms, transform 0.65s 490ms;"
		>
			<p><em>{description}</em></p>
           
		</div>
		<!-- <div class="md:col-span-8 md:col-start-5">
            {@render children()}
            
        </div> -->
	</div>
</div>
