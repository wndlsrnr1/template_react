import { User } from "@/api/modules/user";

interface UserListProps {
  user: User;
}

export default function UserList({ user }: UserListProps) {
  return <li key={user.id}>{user.name}</li>;
}
