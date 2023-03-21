import React from 'react'
import { json, useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../features/APIslice'


export default function Products() {
    const { id } = useParams()

    const {data}=useGetProductsQuery(id)
    
    
  return (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Products</h1>
      
    </div>
  )
}