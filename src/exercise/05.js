// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({
  className = '', // extra classname
  style = '', // font, color 
  size = '', 
  boxColor = '',
  ...otherProps
}) {
  const boxClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${boxClassName}`}
      style={{fontStyle: 'italic', backgroundColor: `${boxColor}`}}
      {...otherProps}
    />
  )
}
const smallBox = (
  <Box size="small" boxColor="lightblue">
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" boxColor="pink">
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" boxColor="orange">
    large orange box
  </Box>
)

const sizelessBox = <Box>sizeless Box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  )
}

export default App
