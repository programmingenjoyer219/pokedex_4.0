export let theme = $state<{ value: "light" | "dark" }>({ value: "dark" });

export function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
