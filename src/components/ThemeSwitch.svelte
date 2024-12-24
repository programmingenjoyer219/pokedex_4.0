<script>
  import { theme, toggleTheme } from "$lib/stores/theme.svelte";
  import Moon from "./icons/Moon.svelte";
  import Sun from "./icons/Sun.svelte";
</script>

<button
  onclick={toggleTheme}
  class="absolute top-1/2 -translate-y-1/2 right-0 p-2 rounded-full bg-blue-600 transition-colors duration-200 hover:bg-blue-700"
>
  {#if theme.value === "light"}
    <Moon />
    <span class="sr-only">switch to dark mode</span>
  {:else}
    <Sun />
    <span class="sr-only">switch to light mode</span>
  {/if}
</button>
