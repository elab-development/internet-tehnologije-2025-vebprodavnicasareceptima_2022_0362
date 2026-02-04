import { apiFetch } from "./client";

export async function getRecipes() {
  return apiFetch("/recipes");
}

export async function getRecipeById(id) {
  return apiFetch(`/recipes/${id}`);
}

export async function getFavoriteRecipeIds() {
  return apiFetch("/recipes/favorites");
}

export async function addFavoriteRecipe(recipeId) {
  return apiFetch("/recipes/favorites", {
    method: "POST",
    body: JSON.stringify({ recipeId }),
  });
}

export async function removeFavoriteRecipe(recipeId) {
  return apiFetch(`/recipes/favorites/${recipeId}`, {
    method: "DELETE",
  });
}
