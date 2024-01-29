import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


// Import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'


// Import Components
import {Sidebar} from './components/Sidebar'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Form} from './components/Form'

import ProductProvider from './contexts/ProductContext'
import FormPage from './pages/FormPage'


const App = () => {
  return (
    <div className="overflow-hidden">

        <ProductProvider>
          <Router>
            <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product/:_id' element={<ProductDetails/>} />
                <Route path='/formcontact' element={<FormPage/>} />
              </Routes>

            <Sidebar/>
            <Footer/>
          </Router>
        </ProductProvider>
    </div>
  )
}
export default App