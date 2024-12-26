<script lang="ts">
  import { theme } from "$lib/stores/theme.svelte";
  import type { Pokemon } from "$lib/types";

  type Stats = Required<Pick<Pokemon, "base">>;

  let { stats }: { stats: Stats } = $props();
  const { base } = stats;
</script>

{#snippet healthIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C10.0224 20.3135 4.91625 17.5626 2.8685 13L7.56619 13L8.5 11.4437L11.5 16.4437L13.5662 13H17V11H12.4338L11.5 12.5563L8.5 7.55635L6.43381 11L2.21024 10.9999C2.07418 10.3626 2 9.69615 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
    ></path></svg
  >
{/snippet}

{#snippet attackIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M17.4563 3L20.9991 3.00335L21.001 6.52648L15.5341 11.992L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L11.9981 15.528L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L8.46212 11.992L3.00181 6.53118L2.99907 3L6.54506 3.00335L11.9981 8.457L17.4563 3ZM9.87612 13.406L7.04807 16.234L7.75607 16.941L10.5831 14.113L9.87612 13.406ZM19.0001 5.001H18.2831L13.4121 9.87L14.1191 10.577L19.0001 5.698V5.001ZM5.00007 5.001V5.701L16.2411 16.942L16.9482 16.2349L5.71507 5.002L5.00007 5.001Z"
    ></path></svg
  >
{/snippet}

{#snippet specialAttackIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M7.04813 13.4061L10.5831 16.9421L9.1703 18.3558L10.5849 19.7711L9.17064 21.1853L6.69614 18.71L3.86734 21.5388L2.45312 20.1246L5.28192 17.2958L2.80668 14.8213L4.22089 13.4071L5.63477 14.8202L7.04813 13.4061ZM2.99907 3L6.54506 3.00335L18.3624 14.8207L19.7772 13.4071L21.1915 14.8213L18.7166 17.2962L21.545 20.1246L20.1308 21.5388L17.3024 18.7104L14.8275 21.1853L13.4133 19.7711L14.8269 18.3562L3.00181 6.53118L2.99907 3ZM17.4563 3.0001L20.9991 3.00335L21.001 6.52648L16.9481 10.5781L13.4121 7.0431L17.4563 3.0001Z"
    ></path></svg
  >
{/snippet}

{#snippet defenseIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"
    ></path></svg
  >
{/snippet}

{#snippet specialDefenseIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598Z"
    ></path></svg
  >
{/snippet}

{#snippet speedIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M20 13C20 15.2091 19.1046 17.2091 17.6569 18.6569L19.0711 20.0711C20.8807 18.2614 22 15.7614 22 13 22 7.47715 17.5228 3 12 3 6.47715 3 2 7.47715 2 13 2 15.7614 3.11929 18.2614 4.92893 20.0711L6.34315 18.6569C4.89543 17.2091 4 15.2091 4 13 4 8.58172 7.58172 5 12 5 16.4183 5 20 8.58172 20 13ZM15.293 8.29297 10.5 12.5 12.5 14.5 16.7072 9.70718 15.293 8.29297Z"
    ></path></svg
  >
{/snippet}

{#snippet stat(name: string, value: number)}
  <div class="flex items-center">
    <div class="w-[20%] flex items-center gap-1 sm:w-[10%]">
      {#if name === "HP"}
        {@render healthIcon()}
      {:else if name === "Attack"}
        {@render attackIcon()}
      {:else if name === "Sp. Attack"}
        {@render specialAttackIcon()}
      {:else if name === "Defense"}
        {@render defenseIcon()}
      {:else if name === "Sp. Defense"}
        {@render specialDefenseIcon()}
      {:else}
        {@render speedIcon()}
      {/if}
      <span>{value}</span>
    </div>
    <div class="p-2 rounded-sm border-2 border-blue-300 flex-1">
      <div
        class="bg-blue-500 text-blue-500"
        style:width="{Math.floor(value / 2)}%"
      >
        .
      </div>
    </div>
  </div>
{/snippet}

<div
  class="space-y-2 p-4 rounded-lg shadow-md border {theme.value === 'light'
    ? 'text-gray-700'
    : 'text-gray-100 border-blue-500/50'}"
>
  {#each Object.entries(base) as entry (entry[0])}
    {@const statName = entry[0]}
    {@const statValue = entry[1]}
    {@render stat(statName, statValue)}
  {/each}
</div>
