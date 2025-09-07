"use server";

import { createUser } from "@/lib/api/users";
import { revalidatePath } from "next/cache";

export async function createUserAction(formData: FormData) {
  const name = formData.get("name") as string;

  // Wrap mutation fetcher
  await createUser({ firstName: name, lastName: "Money", age: 50 });

  // Revalidate the list page so it shows the new user
  revalidatePath("/users");
}
