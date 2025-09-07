"use client";

import useSWR from "swr";
import { getUsers } from "@/lib/api/users";
import { User } from "@/lib/types/user";

export default function UserListClient({
  initialData,
}: {
  initialData: User[];
}) {
  const { data = initialData } = useSWR("users", getUsers, {
    fallbackData: initialData, // hydrate client cache
  });

  return (
    <ul>
      {data.map((u: User) => (
        <li key={u.id}>{u.firstName}</li>
      ))}
    </ul>
  );
}
