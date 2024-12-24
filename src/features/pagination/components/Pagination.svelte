{#snippet leftArrowIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
    ></path></svg
  >
{/snippet}

{#snippet rightArrowIcon()}
  <svg
    class="size-6"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ><path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path></svg
  >
{/snippet}

<div
  class="grid grid-cols-3 gap-8 bg-yellow-400 text-sm text-center rounded-md font-semibold text-blue-600 sm:text-xl"
>
  <button class="pagination-button">
    {@render leftArrowIcon()}
    <span class="sr-only">previous page</span>
  </button>
  <div class="flex items-center justify-center">
    <span class="p-2 sm:p-4">1</span>
  </div>
  <button class="pagination-button">
    {@render rightArrowIcon()}
    <span class="sr-only">next page</span>
  </button>
</div>

<style>
  .pagination-button {
    @apply p-2 sm:p-4 shadow-md rounded-md border-2 
		border-yellow-400 hover:bg-yellow-300
		transition-colors duration-200 disabled:bg-yellow-100 
		disabled:cursor-not-allowed;
  }
</style>
