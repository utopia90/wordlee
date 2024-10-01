import React from 'react'
import Square from '../Square/Square'

export default function Line({guess, colors}) {
  const squareMap = [...Array(5)]
  console.log("colors", colors, guess)
  return (
    <div className='line'>{squareMap.map((square, i) => <Square key={i} color={colors?.length > 0 ? colors[i] : null} letter={guess ? guess.charAt(i) : null}/>)}</div>
  )
}
