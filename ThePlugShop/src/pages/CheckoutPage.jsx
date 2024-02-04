
import { useContext, useState } from 'react'
import {CartContext} from '../contexts/CartContext'


// icons
import {FiTrash2} from 'react-icons/fi'



// componenets
import {CartItem} from '../components/CartItem'


const CheckoutPage = () => {
    const [purchaseMesasge, setPurchaseMesasge] = useState(false)
    const [emptyCart, setEmptyCart] = useState(false)  
  
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
        setPurchaseMesasge(true)
        console.log('Purchase sucessful')
        
    }else {
        setEmptyCart(true)
        return

    }
}

    return (
    <div>
    
    <div className="flex flex-col gap-y-1 h-[420px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b px-10">
        {cart.map((item) => {
        return <CartItem item={item} key={item._id}/>
       })}
       </div>
     
    <div className="flex w-full justify-between items-center px-3">
        {/* total amount */}
        <div className="uppercase font-semibold">
          <span className="mr-2">Total:</span>SEK {parseFloat(total)}
        </div>
       {/* clear cart icon */}
            <button onClick={() => {
                handleBuy()
                clearCart()
            }} className='bg-green-900/80 mt-4 mb-5 px-4 py-4 uppercase rounded-md w-1/5'>Buy</button>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-black text-white w-12 h-12 flex text-2xl justify-center items-center rounded-xl">
            <FiTrash2 />
            </div>


          </div>
            {purchaseMesasge && <p className="text-emerald-900 text-xl bg-orange-200  rounded-xl text-center">Your purchase has been completed ,  <br></br>thank you for your order! </p>}
    {emptyCart && <p className="text-red-900 text-xl bg-orange-200  rounded-xl text-center">You need to add one item to the cart</p>}
        </div>
    
  )
}
export default CheckoutPage