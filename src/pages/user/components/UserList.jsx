export default function UserList({ user }) {
	return <li key={user.id}>{user.name}</li>;
}
