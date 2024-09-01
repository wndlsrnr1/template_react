import styles from './LoadingSpinner.module.css';
import main_logo from '@/assets/images/fullip_logo.png';
import { useSelector } from 'react-redux';

function LoadingSpinner() {
	const spinnerStore = useSelector((state) => state.spinner);

	return (
		<>
			{spinnerStore.isLoading === true && (
				<div className={styles.background}>
					<img className={styles.spinner} src={main_logo} alt="main_logo" width={40} />
				</div>
			)}
		</>
	);
}

export default LoadingSpinner;
