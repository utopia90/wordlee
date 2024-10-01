import React from 'react'
import '../components.css'

export default function Square({letter, color}) {
  return (
    <div className={`square ${color}`}>{letter}</div>
  )
}
