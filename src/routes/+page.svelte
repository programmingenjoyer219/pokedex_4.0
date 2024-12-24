<script lang="ts">
  import PokemonCard from "$features/card/components/PokemonCard.svelte";
  import Pagination from "$features/pagination/components/Pagination.svelte";
  import Marquee from "$features/search/components/Marquee.svelte";
  import SearchBar from "$features/search/components/SearchBar.svelte";
  import data from "$lib/db/data.json";
  import type { Pokemon } from "$lib/types";

  const pokemonsToDisplay = data as Pokemon[];
</script>

<section class="pt-8 space-y-4">
  <SearchBar />
  <Marquee />
</section>

<section class="pt-8">
  <div class="card-grid">
    {#each pokemonsToDisplay.slice(0, 12) as pokemon (pokemon.id)}
      <PokemonCard {pokemon} />
    {/each}
  </div>
</section>

<section class="pt-8 pb-4 flex items-center justify-center">
  <Pagination />
</section>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 8.001rem));
    place-content: center;
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .card-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 281px));
    }
  }
</style>
