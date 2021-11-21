import { CSSProperties, FC } from 'react'

interface ITooltipProps {
  tooltip?: string
  tooltipStyle?: CSSProperties
}

const Tooltip: FC<ITooltipProps> = ({ tooltip = '', tooltipStyle }) => {
  return tooltip ? (
    <div className='Tooltip-container' style={{ ...tooltipStyle }}>
      {tooltip}
    </div>
  ) : null
}

export default Tooltip
export {
  Tooltip
}