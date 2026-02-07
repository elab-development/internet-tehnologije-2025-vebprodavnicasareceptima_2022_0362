import { apiFetch } from "./client";

export function getCart() {
  return apiFetch("/cart");
}

export function addToCart(productId, quantity = 1) {
  return apiFetch("/cart", {
    method: "POST",
    body: JSON.stringify({ productId, quantity }),
  });
}

export function deleteFromCart(productId) {
  return apiFetch(`/cart/${productId}`, { method: "DELETE" });
}

export function updateCartItem(productId, quantity) {
  return apiFetch(`/cart/${productId}`, {
    method: "PATCH",
    body: JSON.stringify({ quantity }),
  });
}

export function clearCart() {
  return apiFetch(`/cart`, { method: "DELETE" });
}
