
import { useContext, useState } from 'react'
import {CartContext} from '../contexts/CartContext'
import {SidebarContext} from '../contexts/SidebarContext'

// icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'



// componenets
import {CartItem} from '../components/CartItem'
import Modal from '../components/Modal'

const CheckoutPage = () => {
  
    const {cart, clearCart, total, itemAmount} = useContext(CartContext)

const handleBuy = async () => {

const products = cart.map(item =>({
    productId: item._id,
    quantity: item.amount, 
}))


    const response = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({products}),
    })

    if(response.ok) {
        // console.log('status code', response.status)
        console.log(products)
        console.log('Purchase sucessful')
    
    }else {
        console.log('Purchase failed,empty cart')
    }
}

    return (
    <div>

    <div className="w-full h-full flex justify-center items-center">CheckoutPage
    


    </div>
    
    <div className="flex flex-col gap-y-1 h-[420px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
        return <CartItem item={item} key={item._id}/>
       })}
       </div>
     
    <div className="flex flex-col w-full justify-between items-center">
        {/* total amount */}
        <div className="uppercase font-semibold">
          <span className="mr-2">Total:</span>SEK {parseFloat(total).toFixed(2)}
        </div>
       {/* clear cart icon */}
            <button onClick={handleBuy} className='bg-green-900/80 mt-4 mb-5 px-4 py-4 uppercase rounded-md w-1/5'>Buy</button>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-black text-white w-12 h-12 flex text-2xl justify-center items-center rounded-xl">
            <FiTrash2 />
            </div>

          </div>
        </div>
    
  )
}
export default CheckoutPage