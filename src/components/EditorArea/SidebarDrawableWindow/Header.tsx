import React, { FC } from 'react'

interface IHeaderProps {
  windowName: string
}

const Header: FC<IHeaderProps> = ({ windowName, children }) => {
  return (
    <div className='Header-container'>
      <span className='windowName'> {windowName}</span>
      {children}
    </div>
  )
}

export default Header
export {
  Header
}