'use client'
 
import { useState } from 'react'
 
export default function RenderedAgo({ renderedAt }) {
  const [renderedAgo, setRenderedAgo] = useState(0)
  setInterval((() => setRenderedAgo(parseInt((new Date() - new Date(renderedAt))/1000))), 1000)
  setRenderedAgo(parseInt((new Date() - new Date(renderedAt))/1000))
  return (
    <div>
      <p>Rendered {renderedAgo} seconds ago</p>
    </div>
  )
}
