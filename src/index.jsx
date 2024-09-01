import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Spinner from '@/components/spinner/LoadingSpinner/LoadingSpinner';
import ModalFrame from '@/components/modal/ModalFrame';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './pages/index';
import '@/assets/index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<Suspense>
				<RouterProvider router={router} />
			</Suspense>
			<ModalFrame />
			<Spinner />
		</Provider>
	</StrictMode>,
);
