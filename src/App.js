import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import layout from './components/layout';
import Projects from './pages/projects';
import ProjectDetail from './pages/projectDetail';
import Layout from './components/layout';

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
        path: '/about',
        element: <h1>About Me</h1>
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
