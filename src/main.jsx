import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Users from './Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
