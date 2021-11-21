import LineNumber from './LineNumber'
import React from 'react'
import { RiNumbersFill } from 'react-icons/ri'

const generateColumnNumbers = () => {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 10 == 0) {
      numbers.push({
        number: i,
        isCollapsible: true
      });
    } else {
      numbers.push({
        number: i,
        isCollapsible: false
      });
    }
  }
  return numbers;
}

const LineNumberColumn = () => {
  return (
    <div className='LineNumberColumn-container'>
      {generateColumnNumbers().map(({ number }) => {
        return (
          <LineNumber
            // key={number}
            number={number}
          />
        )
      })}
    </div>
  )
}

export default LineNumberColumn
export {
  LineNumberColumn
}