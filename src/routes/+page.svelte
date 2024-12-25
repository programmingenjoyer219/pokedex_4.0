<script lang="ts">
  import PokemonCard from "$features/card/components/PokemonCard.svelte";
  import Pagination from "$features/pagination/components/Pagination.svelte";
  import Marquee from "$features/search/components/Marquee.svelte";
  import SearchBar from "$features/search/components/SearchBar.svelte";
  import data from "$lib/db/data.json";
  import type { Pokemon } from "$lib/types";

  const pokemons = data as Pokemon[];
  let searchQuery = $state("");
  let pokemonType = $state("");
  let pokemonsToDisplay = $derived(
    pokemons.filter((p) =>
      pokemonType
        ? p.type.includes(pokemonType) &&
          p.name.english.toLowerCase().includes(searchQuery.toLowerCase())
        : p.name.english.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  let numberOfPages = $derived(Math.ceil(pokemonsToDisplay.length / 12));
  let pageIndex = $state(0);
  let paginationStartIndex = $derived(pageIndex * 12);

  $effect(() => {
    pokemonsToDisplay;
    pageIndex = 0;
  });
</script>

<section class="pt-8 space-y-4">
  <SearchBar bind:searchQuery />
  <Marquee bind:pokemonType />
</section>

{#if pokemonsToDisplay.length}
  <section class="pt-8">
    <div class="card-grid">
      {#each pokemonsToDisplay.slice(paginationStartIndex, paginationStartIndex + 12) as pokemon (pokemon.id)}
        <PokemonCard {pokemon} />
      {/each}
    </div>
  </section>

  <section class="pt-8 pb-4 flex items-center justify-center">
    <Pagination bind:pageIndex {numberOfPages} />
  </section>
{:else}
  <section class="pt-8">
    <h3 class="text-2xl font-bold text-blue-600 text-center">No results...</h3>
  </section>
{/if}

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
