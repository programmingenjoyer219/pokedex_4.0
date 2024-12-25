<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Pokemon } from "$lib/types";
  import PokemonProfileSlot from "./PokemonProfileSlot.svelte";
  import PokemonTypeSlot from "./PokemonTypeSlot.svelte";

  let { pokemon }: { pokemon: Pokemon } = $props();
  let {
    id,
    name: { english },
    type: pokemonTypes,
    profile: { height, weight },
  } = pokemon;
</script>

<!-- card design for screen-width <= 640px -->
<button
  class="sm:hidden cursor-pointer flex flex-col items-center justify-center p-4 gap-4 rounded-md transition-all ease-out shadow-md transform hover:shadow-lg hover:-translate-y-1"
  style:border="2px solid var(--{pokemonTypes[0]})"
>
  <img src="/images/{id}.png" alt={english} class="rounded-md size-20" />
  <span
    class="p-1 text-sm rounded-sm font-semibold text-white"
    style:background-color="var(--{pokemonTypes[0]})">{english}</span
  >
</button>

<!-- card design for screen-width >= 640px -->
<button
  onclick={() => goto(`/pokemon/${id}`)}
  style:border="2px solid var(--{pokemonTypes[0]})"
  class="hidden cursor-pointer flex-col items-center justify-center p-4 gap-4 rounded-md transition-all ease-out shadow-md transform hover:-translate-y-1 hover:shadow-lg sm:flex"
>
  <img
    src="/images/{id}.png"
    alt={english}
    class="rounded-md"
    height="160px"
    width="160px"
  />
  <span class="font-bold text-xl">{english}</span>
  <div class="flex items-center justify-center gap-2">
    {#each pokemonTypes as pokemonType, index (index)}
      <PokemonTypeSlot {pokemonType} />
    {/each}
  </div>
  <PokemonProfileSlot {height} {weight} />
</button>
