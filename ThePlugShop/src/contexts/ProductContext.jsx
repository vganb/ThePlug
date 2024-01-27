import { createContext, useEffect, useState } from "react"


// create context
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  // product state
  const [products, setProducts] = useState([])

  const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/products')

  useEffect (() => {
    const getAllProducts = async () => {
      const response = await fetch(url)
      if(!response.ok) {
        console.log('Cant fetch products', response.status)
        return
      }
      const data = await response.json()
      // console.log(data)
      setProducts(data)
    }
    getAllProducts()

  },[url])
  

  return (
  <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider