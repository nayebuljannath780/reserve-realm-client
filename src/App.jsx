import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header/>
    },
    {
      path:'/login',
      element: <Login/>
    }
  ])

  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
