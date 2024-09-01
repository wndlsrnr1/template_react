import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Root = lazy(() => import('@/pages/(root)/Root'));
const User = lazy(() => import('@/pages/user/User'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/user',
		element: <User />,
	},
]);

export default router;
