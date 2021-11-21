import { FC } from 'react'
import TextIcon from '../TextIcon'
import { VscChevronDown } from 'react-icons/vsc'

export interface ILeftSideActionIconsProps {
  accordionName: string
}

const LeftSideActionIcons: FC<ILeftSideActionIconsProps> = ({ accordionName }) => {
  return (
    <div className='LeftSideActionIcons-container'>

      <TextIcon
        Icon={<VscChevronDown />}
      />

      <span>{accordionName}</span>
    </div>
  )
}

export default LeftSideActionIcons
