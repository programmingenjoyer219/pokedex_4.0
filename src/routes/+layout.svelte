<script lang="ts">
  import "../app.css";
  import ThemeSwitch from "$components/ThemeSwitch.svelte";
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme.svelte";

  let { children } = $props();

  onMount(() => {
    // @ts-ignore
    theme.value = localStorage.getItem("theme") ?? "light";
    document.querySelector("html")!.dataset.theme = theme.value;
  });
</script>

<svelte:head>
  <title>Pokédex 4.0</title>
</svelte:head>

<main class="min-h-dvh container mx-auto max-w-4xl px-2">
  <nav class="relative flex items-center justify-center">
    <a class="w-[8rem] sm:w-[12rem]" href="/">
      <img src="/pokemon-logo.png" alt="pokemon logo" />
    </a>
    <ThemeSwitch />
  </nav>
  {@render children()}
</main>
