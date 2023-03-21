import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'

export default function App() {
  return (
    <div>
       <Routes>
      <Route
       path='/' 
       element={<Home/>}
       />
       <Route
       path='/:id'
       element={<Products/>}   
       />   
  </Routes>
      <h1>App</h1>
    </div>
  )
}