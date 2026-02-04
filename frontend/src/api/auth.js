import { apiFetch, setToken, clearToken } from "./client";

export async function register({ name, email, password }) {
  try {
    const data = await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    setToken(data.token);
    return data.user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    const data = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setToken(data.token);
    return data.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function me() {
  const data = await apiFetch("/auth/me");
  return data.user;
}

export function logout() {
  clearToken();
}
