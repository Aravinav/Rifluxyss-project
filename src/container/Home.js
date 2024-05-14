import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';

import Cart from './Cart';

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default Home;
