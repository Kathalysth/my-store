"use client";

import { createUserAction } from "./actions";

export default function UserForm() {
  return (
    <form action={createUserAction} className="space-x-2">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        className="border rounded px-2 py-1"
        required
      />
      <button
        type="submit"
        className="px-3 py-1 rounded bg-blue-600 text-white"
      >
        Create
      </button>
    </form>
  );
}
