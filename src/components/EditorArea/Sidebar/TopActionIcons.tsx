import { VscDatabase, VscDebugAlt2, VscExtensions, VscSearch } from 'react-icons/vsc'

import { BiGitBranch } from 'react-icons/bi'
import { FC } from 'react'
import { ISidebarProps } from './Sidebar'
import { ImFilesEmpty } from 'react-icons/im'
import { IoMdGitMerge } from 'react-icons/io'
import { RiAliensLine } from 'react-icons/ri'
import { SIDEBAR_OPTIONS_WINDOW_NAMES } from '../EditorArea.enums'
import { SiDocker } from 'react-icons/si'
import { TextIcon } from '../../common'

const TopActionIcons: FC<ISidebarProps> = ({ openOptionsWindow }) => {


  return (
    <div className='TopActionIcons-container' >

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.EXPLORER} (Ctrl+Shift+E)`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<ImFilesEmpty />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.SEARCH} (Ctrl+Shift+F)`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscSearch />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.SOURCE_CONTROL} (Ctrl+shift+G G) 34 pending changes`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<BiGitBranch />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.RUN_AND_DEBUG} (Ctrl+Shift+D)`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscDebugAlt2 />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.EXTENSIONS} (Ctrl+Shift+X)`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscExtensions />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.GITLENS}`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<IoMdGitMerge />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.SQLTOOLS}`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscDatabase />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.PLATFORMIO}`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<RiAliensLine />}
        openOptionsWindow={openOptionsWindow}
      />

      <TextIcon
        tooltip={`${SIDEBAR_OPTIONS_WINDOW_NAMES.DOCKER}`}
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<SiDocker />}
        openOptionsWindow={openOptionsWindow}
      />


    </div>
  )
}

export default TopActionIcons
export {
  TopActionIcons
}