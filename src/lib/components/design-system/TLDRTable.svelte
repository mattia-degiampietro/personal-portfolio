<script>
    let {stack, links, timeline} = $props()
    let screenWidth = $state(0);
</script>
<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth < 768}
    <div class="overflow-x-auto rounded-lg border border-border">
        <table class="w-full border-collapse bg-transparent text-left text-sm text-[var(--text-secondary)] divide-x divide-gray-300">
            <tbody class="border-none">
                <tr class="border-b">
                    <!-- Questa cella scende e occupa la prima colonna sia del thead che della prima riga del tbody -->
                    <th scope="col" class="px-6 py-2 font-bold">TL&DR;</th>
                </tr>
                <tr class="border-none">
                    <!-- Questa cella scende e occupa la prima colonna sia del thead che della prima riga del tbody -->
                    <th scope="col" class="px-6 pt-2 font-bold">Stack</th>
                </tr>
                <tr class="border-b">
                    <!-- NOTA: Il primo <td> della riga è stato eliminato! Lo spazio è preso dal rowspan="2" di "a" -->
                    
                    <td class="px-6 pb-2">
                        <!-- Ottimizzazione dei cicli nativa e pulita in Svelte -->
                        {#each stack as stack_item, i}
                            {i === 0 ? '' : ', '}{stack_item}
                        {/each} 
                    </td>
                </tr>
                <tr class="border-none">
                    <th scope="col" class="px-6 pt-2 font-bold">Links</th>
                </tr>
                <tr class="border-none">
                    <td class="px-6 pb-2">
                        {#each links as link, i}
                            {i === 0 ? '' : ', '}
                            <a href="https://{link[1]}" class="text-indigo-600 hover:underline" target="_blank">
                                {link[0]}
                            </a>
                        {/each}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{:else}
    <div class="overflow-x-auto rounded-lg border border-border">
        <table class="w-full border-collapse bg-transparent text-left text-sm text-[var(--text-secondary)] divide-x divide-gray-300">
            <tbody class="border-none">
                <tr class="border-none">
                    <!-- Questa cella scende e occupa la prima colonna sia del thead che della prima riga del tbody -->
                    <th scope="col" class="px-6 pt-3" rowspan="2">TL&DR;</th>
                    <th scope="col" class="px-6 pt-3 font-bold border-l">Stack</th>
                    <th scope="col" class="px-6 pt-3 font-bold border-l">Links</th>
                </tr>
                <tr class="border-none">
                    <!-- NOTA: Il primo <td> della riga è stato eliminato! Lo spazio è preso dal rowspan="2" di "a" -->
                    
                    <td class="px-6 pb-3 pt-2 border-l">
                        <!-- Ottimizzazione dei cicli nativa e pulita in Svelte -->
                        {#each stack as stack_item, i}
                            {i === 0 ? '' : ', '}{stack_item}
                        {/each} 
                    </td>
                    <td class="px-6 pb-3 pt-2 border-l">
                        {#each links as link, i}
                            {i === 0 ? '' : ', '}
                            <a href="https://{link[1]}" class="text-indigo-600 hover:underline" target="_blank">
                                {link[0]}
                            </a>
                        {/each}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
{/if}