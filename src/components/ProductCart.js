import React from 'react'

export default function ProductCart(props) {
    return (
        <div>
            <div className='card m-2 cursor-pointer' style={{ width: 300 }}>
                <div className='mt-2'>
                    <img src={props.Poster} height={150} width={180} alt={props.title} className='border-radius-9' />
                </div>
                <div className='card-body'>
                    <h5 className='card-title'> {props.Title}</h5>
                    <h5 className='mt-2'> Year: {props.Year}</h5>
                </div>
                <div className='mt-4'>
                    <button onClick={(e) => props.removeItem(props.Title)} className='btn btn-success mb-2'>Remove from cart</button>
                </div>
            </div>
        </div>
    )
}

