import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
]);

export default router;
