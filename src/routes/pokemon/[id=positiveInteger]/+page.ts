import data from "$lib/db/data.json";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  const pokemonId = Number(params.id);
  const requiredPokemon = data[pokemonId - 1];
  if (requiredPokemon) return { pokemon: requiredPokemon };
  return error(404, {
    message: "We couldn't find the Pokemon you're looking for.",
  });
};
