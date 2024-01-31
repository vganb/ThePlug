import { useContext, useEffect, useState } from "react"

// import product context
import {ProductContext} from '../contexts/ProductContext'
// import componeneter
import {Product} from "../components/Product"
import { Hero } from "../components/Hero"

const Home = () => {
  // get products from product context
  const {products} = useContext(ProductContext)
  
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange =(event) => {
    setSelectedCategory(event.target.value)
  }
  const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(products => products.category === selectedCategory)
return (
<div>
  <div>
    <select className="block mx-auto w-2/4 p-2 mb-6 text-sm text-gray-900 border rounded-lg bg-gray-50" onChange={handleCategoryChange}>
      <option value="All">All</option>
      <option value="laptop">Laptop</option>
      <option value="mobiltelefoner">Mobil</option>
      <option value="dammsugare">Dammsugare</option>
      <option value="TV">TV</option>
    </select>
  </div>
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
          {filteredProducts.map((product) => {
          return <Product product={product} key={product._id}/>
        })}
        </div>
      </div>
    </section>
</div>
  )
}
export default Home