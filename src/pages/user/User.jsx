import styles from './User.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $axios from '@/api/controller';

export default function User() {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await $axios.user.getUserList();
			console.log(response.data);
			setUserList(response.data);
		})();
	}, []);

	return (
		<div>
			<h1 className={styles.title}>User</h1>
			{userList.length === 0 ? (
				<p className={styles.loading}>Loading...</p>
			) : (
				<ul>
					{userList.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
			<Link to={'/'} className={styles.link}>
				go to /
			</Link>
		</div>
	);
}
