'use client'
 
import { useState } from 'react'
 
export default function RenderedAgo({ renderedAt }) {
 console.log(renderedAt)
  const [renderedAgo, setRenderedAgo] = useState(0)
  /*const updateTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const clockElement = document.getElementById('clock');
    
  }*/
  setInterval((() => setRenderedAgo(new Date() - new Date(renderedAt))), 1000)
 
  return (
    <div>
      <p id="clock">Rendered {renderedAgo} ago</p>
    </div>
  )
}
