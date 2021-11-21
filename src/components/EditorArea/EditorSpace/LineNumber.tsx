import { FC } from 'react'
import React from 'react'

interface ILineNumberProps {
  number: number,
  isCollapsible?: boolean
}

const LineNumber: FC<ILineNumberProps> = ({ number, isCollapsible = false }) => {
  return (
    <div className='LineNumber-container'>
      {number}
    </div>
  )
}

export default LineNumber
