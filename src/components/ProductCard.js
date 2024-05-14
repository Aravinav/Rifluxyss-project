import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/cart';



function ProductCard(props) {
   const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addItem(props));
      }
  return (
    <div>
      <div className='card m-2 cursor-pointer' style={{ width: 300 }}>
        <div className='mt-2'>
          <img src={props.Poster} height={150} width={180} alt={props.title} className='border-radius-9'/>
        </div>
        <div className='card-body'>
          <h5 className='card-title'> {props.Title}</h5>
          <h5 className='mt-2'> Year: {props.Year}</h5>
        </div>
        <div className='mt-4'>
          <button onClick = {addToCart}  className='btn btn-success mb-2'>Add to Cart</button> 
        </div>
      </div>
    </div>

  )
}

export default ProductCard
