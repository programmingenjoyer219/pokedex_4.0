<script lang="ts">
  import type { Pokemon } from "$lib/types";

  let { pokemon }: { pokemon: Pokemon } = $props();
  let {
    id,
    name: { english },
    type: pokemonTypes,
    profile: { height, weight },
  } = pokemon;
</script>

{#snippet rulerIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M4.92901 13.3138L7.05033 15.4351L8.46455 14.0209L6.34323 11.8996L8.46455 9.77828L11.293 12.6067L12.7072 11.1925L9.87876 8.36407L12.0001 6.24275L14.1214 8.36407L15.5356 6.94986L13.4143 4.82853L16.2427 2.00011C16.6332 1.60958 17.2664 1.60958 17.6569 2.00011L22.6067 6.94986C22.9972 7.34038 22.9972 7.97354 22.6067 8.36407L7.75744 23.2133C7.36692 23.6038 6.73375 23.6038 6.34323 23.2133L1.39348 18.2636C1.00295 17.873 1.00295 17.2399 1.39348 16.8494L4.92901 13.3138Z"
    ></path></svg
  >
{/snippet}

{#snippet weightIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M14.0004 6C14.0004 7.10457 13.1049 8 12.0004 8C10.8958 8 10.0004 7.10457 10.0004 6C10.0004 4.89543 10.8958 4 12.0004 4C13.1049 4 14.0004 4.89543 14.0004 6ZM15.4652 8C15.8056 7.41165 16.0004 6.72857 16.0004 6C16.0004 3.79086 14.2095 2 12.0004 2C9.79122 2 8.00036 3.79086 8.00036 6C8.00036 6.72857 8.19515 7.41165 8.53549 8H5.06615C4.57888 8 4.16255 8.3512 4.08045 8.8315L2.2001 19.8315C2.0957 20.4423 2.56618 21 3.18581 21H20.8149C21.4345 21 21.905 20.4423 21.8006 19.8315L19.9203 8.8315C19.8382 8.3512 19.4218 8 18.9346 8H15.4652Z"
    ></path></svg
  >
{/snippet}

{#snippet pokemonTypeSlot(pokemonType: string)}
  <div
    style:background-color="var(--{pokemonType})"
    class="flex items-center p-2 gap-2 rounded-full w-[120px] shadow-sm"
  >
    <img
      src="/pokemon_types/{pokemonType.toLowerCase()}.svg"
      class="rounded-full p-1"
      style:background-color="var(--{pokemonType})"
      height={28}
      width={28}
      alt={pokemonType}
    />
    <span class="text-center w-full text-white text-sm font-semibold">
      {pokemonType}
    </span>
  </div>
{/snippet}

{#snippet pokemonProfileSlot(height: string, weight: string)}
  <div class="flex items-center justify-center gap-4 mt-2">
    <div class="flex items-center justify-center gap-1">
      {@render rulerIcon()}
      <span class="font-semibold text-lg">{height}</span>
    </div>

    <div class="flex items-center justify-center gap-1">
      {@render weightIcon()}
      <span class="font-semibold text-lg">{weight}</span>
    </div>
  </div>
{/snippet}

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
      {@render pokemonTypeSlot(pokemonType)}
    {/each}
  </div>
  {@render pokemonProfileSlot(height, weight)}
</button>
