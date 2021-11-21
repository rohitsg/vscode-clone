import { FC } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { TextIcon } from '../../common'
import { VscClose } from 'react-icons/vsc'

interface IClosableTabProps {
  active?: boolean
}

const ClosableTab: FC<IClosableTabProps> = ({ active }) => {
  const activeTabClass = `${active ? 'activeTab' : ''}`;

  return (
    <div className={`ClosableTab-container`}>
      <TextIcon
        Icon={<GrReactjs />}
      />
      <TextIcon
        tooltip='files'
        title='ClosableTab'
      />
      <TextIcon
        Icon={<VscClose />}
      />

      <span className={`${activeTabClass}`} />
    </div>
  )
}

export default ClosableTab
export {
  ClosableTab
}