import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ElixerListPage from './pages/ElixerList';
import ElixerPage from './pages/ElixerPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/elixers',
    element: <ElixerListPage />
  },
  {
    path: '/elixers/:name', // -> /elixers/elixer-hydration
    element: <ElixerPage />
  }]
}]

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>

  );
}

export default App
