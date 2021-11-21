import './style.scss';

import LeftStatusBar from './LeftStatusBar';
import RightStatusBar from './RightStatusBar';

const StatusBar = () => {
  return (
    <div className='StatusBar-container'>
      <LeftStatusBar />
      <RightStatusBar />
    </div>
  )
}

export default StatusBar
export {
  StatusBar
}