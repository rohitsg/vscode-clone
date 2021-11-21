import { VscClose, VscCompareChanges, VscEllipsis, VscSplitHorizontal } from 'react-icons/vsc'

import { TextIcon } from '../../common'

const RightSideClosableTabsActionIcons = () => {
  return (
    <div className='RightSideClosableTabsActionIcons-container'>
      <TextIcon
        tooltip='Open Changes'
        tooltipStyle={{
          transform: 'translate(-105%, 110%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<VscCompareChanges />} />

      <TextIcon
        tooltip='Split Editor Right (Ctrl+\)'
        tooltipStyle={{
          transform: 'translate(-105%, 110%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<VscSplitHorizontal />} />

      <TextIcon
        tooltip='More Actions...'
        tooltipStyle={{
          transform: 'translate(-105%, 110%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<VscEllipsis />} />
    </div>
  )
}

export default RightSideClosableTabsActionIcons
export {
  RightSideClosableTabsActionIcons
}