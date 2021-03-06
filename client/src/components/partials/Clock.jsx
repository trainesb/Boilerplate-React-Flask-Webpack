import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return function cleanup() { clearInterval(timerID) }
  })

  function tick() { setDate(new Date()) }

  return (
    <div>
      <h1>ISMD <span style={{fontSize: '1.25rem'}}>v3.34</span></h1>
      <h2>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} - {date.toLocaleTimeString()}</h2>
    </div>
  )
}
export default Clock
