import { VscBroadcast, VscFeedback } from 'react-icons/vsc'

import { CgMediaLive } from 'react-icons/cg'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TextIcon } from '../common'

const RightStatusBar = () => {
  return (
    <div className='RightStatusBar-container'>

      <TextIcon
        tooltip='Select Indentation'
        title='Spaces: 2'
      />

      <TextIcon
        tooltip='Select Encoding'
        title='UTF-8'
      />

      <TextIcon
        tooltip='Select End of Line Sequence'
        title='LF'
      />

      <TextIcon
        tooltip='Select language Mode'
        title='Typescript React'
      />


      <TextIcon
        tooltip='Click to run live server'
        title='Go Live'
        Icon={<VscBroadcast />}
      />

      <TextIcon
        tooltip='/tsserver'
        title='4.3.5'
      />

      <TextIcon
        title='Sort Imports: ✓'
      />

      <TextIcon
        tooltip='Tweet Feedback'
        Icon={<VscFeedback />}
      />

      <TextIcon
        tooltip='No Notifications'
        Icon={<IoNotificationsOutline />}
      />


    </div>
  )
}

export default RightStatusBar
export {
  RightStatusBar
}