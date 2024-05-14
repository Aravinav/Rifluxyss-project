import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCart from '../components/ProductCart'
import { removeItem as RemoveItemfromCart } from '../redux/reducer/cart'
import CartHeader from '../components/cartHeader'



export default function Cart() {
  const list = useSelector((state) => {
    return state.cart.list
  })
  const dispatch = useDispatch()
  const removeItem = (item) => {
    dispatch(RemoveItemfromCart(item))
  }

  return (
    <>
      <CartHeader />
      <div className='d-flex flex-wrap justify-content-center p-3'>
        {list.map((items) => <ProductCart {...items}
          removeItem={(item) => removeItem(item)} />)}
      </div>
    </>
  )
}


