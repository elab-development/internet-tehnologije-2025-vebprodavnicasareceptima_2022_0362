import { apiFetch } from "./client";

// Svi proizvodi 
export function getProducts() {
  return apiFetch("/products");
}

export function createProduct(payload) {
  return apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function deleteProduct(id) {
  return apiFetch(`/products/${id}`, { method: "DELETE" });
}