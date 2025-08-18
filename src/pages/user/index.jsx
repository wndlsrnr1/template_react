import styles from "./index.module.css";
import { Link } from "react-router-dom";
import $axios from "@/api/controller";
import UserList from "./components/UserList";
import { useQuery } from "@tanstack/react-query";

export default function User() {
  const {
    data: userList = [],
    isLoading,
    isError,
    error,
  } = useQuery($axios.user.getUserList());

  return (
    <div>
      <h1 className={styles.title}>User</h1>
      {isLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) : isError ? (
        <p className={styles.loading}>
          {error?.message ?? "에러가 발생했어요."}
        </p>
      ) : (
        <ul>
          {userList.map((user) => (
            <UserList key={user.id} user={user} />
          ))}
        </ul>
      )}
      <Link to={"/"} className={styles.link}>
        go to /
      </Link>
    </div>
  );
}
