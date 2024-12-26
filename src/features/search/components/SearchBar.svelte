<script lang="ts">
  import { theme } from "$lib/stores/theme.svelte";

  let { searchQuery = $bindable("") }: { searchQuery: string } = $props();
</script>

<form
  onsubmit={(e) => e.preventDefault()}
  class="p-3 rounded-md shadow-lg border flex flex-col itemt-center gap-4 sm:flex-row {theme.value ===
    'dark' && 'border-blue-500/50'}"
>
  <label class="sr-only" for="search-query">search pokemons</label>
  <input
    class="p-3 rounded-md flex-1 border-2 outline-none bg-transparent focus:border-blue-600 focus:ring-2 focus:ring-blue-300 placeholder:font-semibold placeholder:text-blue-400 font-semibold text-center sm:text-left {theme.value ===
    'light'
      ? 'text-blue-700'
      : 'text-blue-100'}"
    name="search-query"
    id="search-query"
    type="text"
    placeholder="I choose you..."
    autocomplete="off"
    bind:value={searchQuery}
  />
</form>
