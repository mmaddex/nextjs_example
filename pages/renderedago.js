'use client'
 
import { useState } from 'react'
 
export default function RenderedAgo({ renderedAt }) {
  const [renderedAgo, setRenderedAgo] = useState(0)
  setInterval((() => setRenderedAgo(parseInt((new Date() - new Date(renderedAt))/1000))), 1000)
  const fixedra = parseInt((new Date() - new Date(renderedAt))/1000)
  return (
    <div>
      <p>Rendered {renderedAgo} seconds ago</p>
      <p>Rendered {fixedra} seconds before the page was loaded</p>
    </div>
  )
}
