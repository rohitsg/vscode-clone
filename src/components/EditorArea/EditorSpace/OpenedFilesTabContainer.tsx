import LeftSideClosableTabs from './LeftSideClosableTabs'
import { RightSideClosableTabsActionIcons } from './RightSideClosableTabsActionIcons'

const OpenedFilesTabContainer = () => {
  return (
    <div className='OpenedFilesTabContainer-container'>
      <LeftSideClosableTabs />
      <RightSideClosableTabsActionIcons />
    </div>
  )
}

export default OpenedFilesTabContainer
export {
  OpenedFilesTabContainer
}