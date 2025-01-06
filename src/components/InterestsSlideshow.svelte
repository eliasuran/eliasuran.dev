<script lang="ts">
import { onMount } from "svelte"

let showTitle = false
let showAll = false

onMount(() => {
  setTimeout(() => {
    showTitle = true
    setTimeout(() => {
      showAll = true
    }, 0)
  }, 0);
})

const interests = [
  { name: "neovim", image: "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/nvim-icon.png" },
  { name: "music", image: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" },
  { name: "gaming", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=625" }
]
</script>

{#if showTitle}
<div class="animate-slideUp space-y-2">
  <h2>Stuff I'm passionate about</h2>
  {#if showAll}
     <div class="animate-slideUp w-96 p-4 overflow-hidden flex gap-4 items-center">
      {#each interests as interest}
        <div class="flex flex-col gap-2 w-24 h-full items-center justify-center">
          <img src={interest.image} alt={`Image of ${interest.name}`}>
        </div>
      {/each}
    </div>
  {/if}
</div>
{/if}
