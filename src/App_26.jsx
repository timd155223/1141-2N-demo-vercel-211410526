import { createBrowserRouter, RouterProvider } from 'react-router';

import { HomeLayoutPage_26, HomePage_26, BlogStaticPage_26, BlogLocalJsonPage_26, BlogNodePage_26,BookListPage_26,BlogSupaPage_26} from './pages';
import { T11_ErrorExamplePage_26, T12_UseStateBasicsPage_26 } from './pages/tutorials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_26 />,
    children: [
      {
        index: true,
        element: <HomePage_26 />,
      },
      {
        path: 'static_26',
        element: <BlogStaticPage_26 />,
      },
      {
        path: 'localjson_26',
        element: <BlogLocalJsonPage_26 />,
      },
      {
        path: 'node_26',
        element: <BlogNodePage_26 />,
      },
      {
        path: 'booklist_26',
        element: <BookListPage_26 />,
      },
      {
        path: 'supa_26',
        element: <BlogSupaPage_26 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_26 />,
    children: [
      {
        index: true,
        element: <HomePage_26 />,
      },
      {
        path: 'T11_26',
        element: <T11_ErrorExamplePage_26 />,
      },
      {
        path: 'T12_26',
        element: <T12_UseStateBasicsPage_26 />,
      },
    ],
  }
]);

const App_26 = () => {
  return <RouterProvider router={router} />;
};

export default App_26;
