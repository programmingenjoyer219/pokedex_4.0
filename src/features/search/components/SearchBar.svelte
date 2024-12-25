<script lang="ts">
  let { searchQuery = $bindable("") }: { searchQuery: string } = $props();
</script>

<form
  onsubmit={(e) => e.preventDefault()}
  class="p-3 rounded-md shadow-lg border flex flex-col itemt-center gap-4 sm:flex-row"
>
  <label class="sr-only" for="search-query">search pokemons</label>
  <input
    class="p-3 rounded-md flex-1 border-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300 placeholder:font-semibold placeholder:text-blue-400 font-semibold text-center sm:text-left"
    name="search-query"
    id="search-query"
    type="text"
    placeholder="I choose you..."
    autocomplete="off"
    bind:value={searchQuery}
  />
  <!-- <button
    class="px-6 py-3 border-2 border-yellow-400 bg-yellow-400 hover:bg-yellow-300 hover:shadow-md text-blue-600 font-semibold rounded-md transition-all duration-200"
    type="submit">Search</button
  > -->
</form>
