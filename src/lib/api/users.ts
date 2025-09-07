import { User } from "../types/user";
import { apiFetch } from "./fetcher";

// Query
export async function getUsers() {
  const { users } = await apiFetch<{ users: User[] }>("/users", {
    cache: "force-cache",
    next: { revalidate: 60 }, // ISR for 1 min
  });
  return users;
}

// Mutation
export async function createUser(data: Partial<User>) {
  return apiFetch("/users/add", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
