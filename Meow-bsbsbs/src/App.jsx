import { useState } from 'react'
import './App.css'
import Navbar from './comp/navbar'
import Cart from './comp/cart'
import data from './data'

function App() {
  
  const db = data.map(item => {
      return (
        <Cart title={item.title} description={item.description} price={item.price} />
      )
  })

  return (
    <div>
      <Navbar/>
      {db}
    </div>
  )
}

export default App
