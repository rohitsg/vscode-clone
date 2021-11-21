import { MenubarItem } from "./MenubarItem"
import { MenubarNames } from "./MenubarMeta";

import './style.scss';

function Menubar() {
  const onMenubarItemClickHandler = () => {
    console.log('in click onMenubarItemClickHandler')
  }

  return (
    <ul className='Menubar-container'>

      {MenubarNames.map((item, idx: number) => {
        const { name, options } = item;
        return <MenubarItem
          key={idx}
          name={name}
          options={options}
          onMenubarItemClickHandler={onMenubarItemClickHandler}
        />

      })}

    </ul>
  )
}

export default Menubar
export {
  Menubar
}
