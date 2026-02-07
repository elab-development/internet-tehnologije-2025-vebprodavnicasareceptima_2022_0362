import { apiFetch } from "./client";

export function getIngredientTypes() {
  return apiFetch("/ingredient-types");
}
