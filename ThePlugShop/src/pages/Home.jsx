import { useContext, useEffect } from "react"

// import product context
import {ProductContext} from '../contexts/ProductContext'
// import componeneter
import {Product} from "../components/Product"

const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext)
 


  // filter cetegory
  const filteredProducts = products.filter((item) => {
    return item.category === 'electronics' || item.category === 'men\'s clothing'
  
})


  
return (
  <div>
    <section className="py-16">
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
        {filteredProducts.map((product) => {
        return <Product product={product} key={product.id}/>
      })}</div>
      </div>
    </section>
    </div>
  )
}
export default Home