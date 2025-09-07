import { getUsers } from "@/lib/api/users";
import UserForm from "./UserForm";
import UserListClient from "./UserListClient";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <UserForm />

      <UserListClient initialData={users} />
    </div>
  );
}
