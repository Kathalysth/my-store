"use server";
import { cookies } from "next/headers";
// import { cache } from "react";
const API_URL = process.env.EXTERNAL_API!;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    cache: options.cache ?? "no-store", // default: no caching
    next: options.next, // allow revalidation if passed
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status} on ${endpoint}`);
  }

  return res.json();
}
