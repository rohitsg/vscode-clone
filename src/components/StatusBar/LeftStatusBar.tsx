import { VscDatabase, VscError, VscHome } from 'react-icons/vsc';

import { AiOutlineWarning } from 'react-icons/ai';
import { BiGitBranch } from 'react-icons/bi';
import { GoCloudUpload } from 'react-icons/go';
import { TextIcon } from '../common';

const LeftStatusBar = () => {
  return (
    <div className='LeftStatusBar-container'>
      <TextIcon
        tooltip='(Git) - Checkout branch/tag'
        Icon={<BiGitBranch style={{
          fontSize: '12px'
        }} />}
        title={'master*'}
      />

      <TextIcon
        tooltip='(Git) - Publish to Github'
        Icon={<GoCloudUpload style={{
          fontSize: '12px'
        }} />}
      />

      <TextIcon>
        <TextIcon
          tooltip='2 Warnings'
          title='0'
          Icon={<VscError />}
        />

        <TextIcon
          tooltip=''
          title='2'
          Icon={<AiOutlineWarning />}
        />
      </TextIcon>

      <TextIcon
        tooltip='PlatformIO: Home'
        Icon={<VscHome style={{
          fontSize: '12px'
        }} />}
      />

      <TextIcon
        tooltip='Select a connection'
        title='Connect'
        Icon={<VscDatabase style={{
          fontSize: '12px'
        }} />}
      />

      <TextIcon
        tooltip='Quakka (Click to open start view)'
        title='Quakka'
        Icon={<VscDatabase style={{
          fontSize: '12px'
        }} />}
      />
    </div>
  )
}

export default LeftStatusBar
export {
  LeftStatusBar
}