import './style.scss'

import { CSSProperties, FC, } from 'react'

import Tooltip from './Tooltip'

interface ITextIconProps {
  Icon?: any,
  title?: string
  openOptionsWindow?: (windowName: string) => void,
  tooltip?: string,
  tooltipStyle?: CSSProperties,
  handleIsOpen?: (isOpen?: boolean) => void,
}

const TextIcon: FC<ITextIconProps> = ({ Icon, title, openOptionsWindow,
  tooltip = '', children, tooltipStyle, handleIsOpen,
}) => {

  const handleOptionsWindow = (evt: any) => {
    evt.preventDefault();
    const tooltipArr = tooltip ? tooltip.split('(') : [];
    if (tooltipArr.length && openOptionsWindow) {
      openOptionsWindow(tooltipArr[0]);
    }
  }

  return children ? (<div className='TextIcon-container'> {children} </div>) : (
    <div className='TextIcon-container'>
      <span onClick={handleOptionsWindow} >
        {Icon} {title}
      </span>

      <Tooltip
        tooltip={tooltip}
        tooltipStyle={tooltipStyle}
      />
    </div>
  )
}

export default TextIcon
export {
  TextIcon
}