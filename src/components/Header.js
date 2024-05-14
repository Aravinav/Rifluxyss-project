import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Searching as searchProducts } from "../redux/reducer/cart"
import { sortItem as SortingItem } from "../redux/reducer/cart"



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [count, setCount] = useState()
  const [sort, setsort] = useState()

  const list = useSelector((state) => {
    return state.cart.list
  })

  const sorting = useSelector((state) => {
    return state.cart.sort
  })

  useEffect(() => {
    setCount(list.length)
  }, [list])

  useEffect(() => {
    setsort(sorting)
  }, [sorting])

  const Sorting = () => {
    dispatch(SortingItem(!sort))
  }

  const searchFunc = (value) => {
    dispatch(searchProducts(value));
  }

  return (
    <div className='p-3 bg-secondary'>
      <h3>Home</h3>
      <div className='row justify-content-center'>
        <div className='d-flex col-sm-12 col-md-7 col-lg-6 col-xl-5'>
          <input className='form-control' onChange={(e) => searchFunc(e.target.value)} type='search' placeholder='Search' />
          <button className='btn btn-success ms-4' onClick={() => navigate('/cart')}>
            <span>Cart</span>
            {count > 0 && <span className='ms-1'>({count})</span>}</button>
        </div>
        <div className='mt-3'>
          <button className='btn btn-success ms-4' onClick={() => Sorting()}>
            <span>Sort</span>
            <span className='ms-1'> by {sort ? "Descending" : "Ascending"}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
