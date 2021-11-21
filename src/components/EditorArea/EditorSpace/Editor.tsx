import CodingSpace from './CodingSpace/CodingSpace'
import LineNumberColumn from './LineNumberColumn'
import React from 'react'

const Editor = () => {
  return (
    <div className='Editor-container'>
      <LineNumberColumn />
      <CodingSpace />
    </div>
  )
}

export default Editor
export {
  Editor
}