import BottomActionIcons from "./BottomActionIcons"
import { FC } from "react"
import TopActionIcons from "./TopActionIcons"

export interface ISidebarProps {
  openOptionsWindow: (optionsWindowName: string) => void,
}

const Sidebar: FC<ISidebarProps> = ({ openOptionsWindow }) => {
  return (
    <div className='Sidebar-container'>

      <TopActionIcons
        openOptionsWindow={openOptionsWindow}
      />
      <div />

      <BottomActionIcons
      />
    </div>
  )
}

export default Sidebar
export {
  Sidebar
}