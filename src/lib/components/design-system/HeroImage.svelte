<script>
    let { theme, cover_img_dark, cover_img_light } = $props();
</script>

<div class="w-full max-h-[650px] object-center justify-center flex cover-img {theme == "light" ? "bg-[#F1EBDF]" : "bg-[#1D1C17]"}" >
    <img 
    src={theme == "dark" 
            ? cover_img_dark
            : cover_img_light
        } 
    alt="Cover" 
    class="max-w-full max-h-full object-contain p-2"
    />
</div>