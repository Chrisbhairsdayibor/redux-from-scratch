import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../features/APIslice'

export default function Home() {
    const {data}= useGetProductsQuery()
  return (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Home</h1>

      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <Link to={`/${item.id}`}>Buy</Link>
          <button onClick={() => alert(item.id)}>❤️</button>
        </div>
      ))}
    </div>
  )
}