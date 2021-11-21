import { VscChevronRight, VscClose } from 'react-icons/vsc'

import { FC } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { TextIcon } from '../../common'

interface IBreadCrumbsItemProps {
  title: string,
  isFolder: boolean
}

const BreadCrumbsItem: FC<IBreadCrumbsItemProps> = ({ title, isFolder }) => {
  return (
    <div className='BreadCrumbsItem-container'>
      {isFolder ? null : <TextIcon
        Icon={<GrReactjs />}
      />}
      <TextIcon
        tooltip='~/projects/src/components'
        title={title}
      />
      <TextIcon
        Icon={<VscChevronRight />}
      />
    </div>
  )
}

export default BreadCrumbsItem
export {
  BreadCrumbsItem
}