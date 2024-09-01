import styles from './Root.module.css';
import { useDispatch } from 'react-redux';
import { setComponent } from '@/store/reducers/modal';
import { modalSetting } from '@/utils/modal';
import { activeSpinner } from '@/store/reducers/spinner';
import { Link } from 'react-router-dom';

export default function Root() {
	const dispatch = useDispatch();

	function showSampleModal() {
		dispatch(setComponent(modalSetting.SampleModal()));
	}

	function showSpinner() {
		dispatch(activeSpinner());
	}
	return (
		<div>
			<h1 className={styles.title}>Home</h1>
			<div className="flex gap-x-1 my-2 *:p-3">
				<button className="blue_button" onClick={showSampleModal}>
					모달
				</button>
				<button className="gray_button" onClick={showSpinner}>
					스피너
				</button>
			</div>
			<Link to={'/user'} className={styles.link}>
				go to /user
			</Link>
		</div>
	);
}
