import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Header from '../components/Header'


export default function DashBoard() {
  const [product, setProduct] = useState([])
  const [allProducts, setAllProducts] = useState([])


  const cartList = useSelector((state) => {
    return state.cart.list
  })

  const sorting = useSelector((state) => {
    return state.cart.sort
  })

  const searchQUery = useSelector((state) => {
    return state.cart.searchList
  })

  useEffect(() => {
    const searchedProducts = allProducts.filter((item) =>
      (item['Title'].toLowerCase()).includes(searchQUery))
    setProduct(searchedProducts)
  }, [searchQUery])

  useEffect(() => {
    let sortedproducts = [];
    if (sorting) {
      sortedproducts = [...product].sort((a, b) => a.Year - b.Year)
      setProduct(sortedproducts)
    }
    else {
      sortedproducts = [...product].sort((a, b) => b.Year - a.Year)
      setProduct(sortedproducts)
    }
  }, [sorting])


  useEffect(() => {
    removelistfromCart()
  }, [cartList])


  const removelistfromCart = () => {
    const newproducts = allProducts.filter((item) => !(cartList.some(movie => movie['Title'] === item['Title'])))
    setProduct(newproducts)
  }




  useEffect(() => {
    axios.get("https://www.omdbapi.com/?s=pirates&apikey=3bd483f3").then(res => {
      setAllProducts(res.data.Search)
      const newproducts = res.data.Search.filter((item) => !(cartList.some(movie => movie['Title'] === item['Title'])))
      setProduct(newproducts)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className='d-flex flex-wrap justify-content-center p-3'>
        {product.map((products) => <ProductCard {...products} />)}
      </div>
    </div>
  )
}
