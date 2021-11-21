import { FC, ReactNode } from 'react'

interface IContentProps {
  children: ReactNode
}

const Content: FC<IContentProps> = ({ children }) => {

  return (
    <div className='Content-container'>
      {children}
    </div>
  )
}

export default Content
export {
  Content
}