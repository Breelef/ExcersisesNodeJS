import { readable, writable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");
export const isAuthenticated = writable(false);
export const user = writable(null);