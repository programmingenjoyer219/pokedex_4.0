<script>
  import { pokemonTypes } from "../utils";
</script>

<div
  class="flex items-center overflow-auto gap-4 p-4 rounded-md shadow-lg border-2 border-blue-600"
>
  {#each pokemonTypes as type}
    <button
      title={type}
      class="flex-none flex items-center gap-2 p-2 rounded-md size-14 hover:opacity-80 hover:scale-110 hover:shadow-md transition-all duration-200"
      style:background-color="var(--{type})"
    >
      <img src="/pokemon_types/{type.toLowerCase()}.svg" alt={type} />
    </button>
  {/each}
</div>
