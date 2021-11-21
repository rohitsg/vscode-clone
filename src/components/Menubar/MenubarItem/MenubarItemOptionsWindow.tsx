import React, { FC } from 'react'
import Separator from './Separator'

export interface OptionsObject {
  name?: string
  separator?: string
  keyShortcut?: string
  options?: OptionsObject[]
}

interface IMenubarItemOptionsWindowProps {
  isOptionsWindowOpen: boolean
  options: OptionsObject[],
  hasSubmenu?: boolean
}

const MenubarItemOptionsWindow: FC<IMenubarItemOptionsWindowProps> = ({ isOptionsWindowOpen, options, hasSubmenu }) => {
  const isOptionsWindowOpenClass = `${isOptionsWindowOpen ? 'show' : 'hide'}`
  const renderSubmenuClass = `${hasSubmenu ? 'hasSubmenu' : ''}`



  return (
    <div className={`MenubarItemOptionsWindow-container ${isOptionsWindowOpenClass} ${renderSubmenuClass}`} >
      <ul>
        {
          options.map((item, idx) => {

            if (item.separator) {
              return <Separator
                key={idx}
              />
            }

            return (
              <li key={idx} className={`${item.options ? 'submenu-arrow' : ''}`}>
                <>
                  <span>{item.name}</span>
                  <span>{item.keyShortcut}</span>

                  {
                    item.options ? (
                      <MenubarItemOptionsWindow
                        isOptionsWindowOpen={isOptionsWindowOpen}
                        options={item.options}
                        hasSubmenu={true}
                      />
                    ) : null
                  }

                </>
              </li>
            )
          })
        }
      </ul>
    </div >
  )
}

export default MenubarItemOptionsWindow

export {
  MenubarItemOptionsWindow
}
