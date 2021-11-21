import './style.scss'

import { EditorSpace } from './EditorSpace/EditorSpace'
import { Sidebar } from './Sidebar'
import { SidebarDrawableWindow } from './SidebarDrawableWindow'
import { useState } from 'react'

const EditorArea = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [windowName, setWindowName] = useState('');

  const openOptionsWindow = (name: string) => {
    setWindowName(name);
    setIsOpen(name === windowName ? !isOpen : true);
  }

  return (
    <div className='EditorArea-container'>
      <EditorSpace />
      <SidebarDrawableWindow
        isOpen={isOpen}
        windowName={windowName}
      />
      <Sidebar
        openOptionsWindow={openOptionsWindow}
      />
    </div>
  )
}

export default EditorArea
export {
  EditorArea
}