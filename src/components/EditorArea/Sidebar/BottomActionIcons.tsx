import { VscAccount, VscSettingsGear } from 'react-icons/vsc'

import { TextIcon } from '../../common'

const BottomActionIcons = () => {
  return (
    <div className='BottomActionIcons'>

      <TextIcon
        tooltip='Accounts'
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscAccount />}
      />

      <TextIcon
        tooltip='Manage'
        tooltipStyle={{
          transform: 'translate(-101%, 40%)'
        }}
        Icon={<VscSettingsGear />}
      />
    </div>
  )
}

export default BottomActionIcons
export {
  BottomActionIcons
}