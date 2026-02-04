import { apiFetch } from "./client";

// Svi proizvodi 
export function getProducts() {
  return apiFetch("/products");
}