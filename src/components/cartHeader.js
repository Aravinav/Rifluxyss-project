import React from 'react'
import { useNavigate } from 'react-router-dom'


function CartHeader() {
    const navigate = useNavigate()

    return (
        <div className='p-3 bg-secondary'>
            <div className='row justify-content-center'>
                <div className='d-flex flex-column align-items-center col-sm-12 col-md-7 col-lg-6 col-xl-5'>
                    <h3>Your Cart List</h3>
                    <button className='btn btn-success mt-3' onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default CartHeader