import { apiFetch } from "./client";

// Moji proizvodi (user_products)

export function getMyProducts() {
  return apiFetch("/my-products");
}

export function addMyProduct(productId, quantity = 1) {
  return apiFetch("/my-products", {
    method: "POST",
    body: JSON.stringify({ productId, quantity }),
  });
}

export function deleteMyProduct(productId) {
  return apiFetch(`/my-products/${productId}`, {
    method: "DELETE",
  });
}
