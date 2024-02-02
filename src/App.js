import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import layout from './components/layout';
import Projects from './pages/projects';
import ProjectDetail from './pages/projectDetail';
import Layout from './components/layout';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:projectName',
        element: <ProjectDetail/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
  
  
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
