<script lang="ts">
  let { pokemonType }: { pokemonType: string } = $props();
</script>

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
