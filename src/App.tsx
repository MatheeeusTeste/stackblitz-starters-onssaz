import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/criar-conta',
    element: <CreateAccountPage />,
  },

 {
   path: '/usuario',
   element: <UserPage />
 }


]);

export const App = () => {
  return <RouterProvider router={router} />;
};
