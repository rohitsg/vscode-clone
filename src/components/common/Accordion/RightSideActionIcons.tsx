import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs'
import { VscChevronRight, VscCollapseAll, VscFolder, VscNewFolder, VscRefresh } from 'react-icons/vsc'

import React from 'react'
import TextIcon from '../TextIcon'

const RightSideActionIcons = () => {
  return (
    <div className='RightSideActionIcons-container'>

      <TextIcon
        tooltip='New File'
        tooltipStyle={{
          transform: 'translate(-101%, 90%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<BsFileEarmarkPlus style={{
          fontSize: '15px'
        }} />}
      />

      <TextIcon
        tooltip='New Folder'
        tooltipStyle={{
          transform: 'translate(-101%, 90%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<BsFolderPlus style={{
          fontSize: '15px'
        }} />}
      />

      <TextIcon
        tooltip='Refresh'
        tooltipStyle={{
          transform: 'translate(-101%, 90%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<VscRefresh style={{
          fontSize: '15px'
        }} />}
      />


      <TextIcon
        tooltip='Collapse Folders in Explorer'
        tooltipStyle={{
          transform: 'translate(-101%, 90%)',
          border: '0.5px solid dimgray',
          overflowY: 'hidden',
        }}
        Icon={<VscCollapseAll style={{
          fontSize: '15px'
        }} />}
      />
    </div>
  )
}

export default RightSideActionIcons
