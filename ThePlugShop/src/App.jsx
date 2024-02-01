import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// Import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import FormPage from './pages/FormPage'
import CheckoutPage from './pages/CheckoutPage'


import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'product/:_id',
        element: <ProductDetails/>,
      },
      {
        path:'contact',
        element: <FormPage/>,
      },
      {
        path:'checkout',
        element: <CheckoutPage/>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
          <RouterProvider router={router}/>
   
    </div>
  )
}
export default App