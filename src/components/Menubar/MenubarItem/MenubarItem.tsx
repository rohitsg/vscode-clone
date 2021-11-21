import { useState, FC, ReactElement } from 'react'
import MenubarItemOptionsWindow, { OptionsObject } from './MenubarItemOptionsWindow';



export interface IMenubarItemProps {
    name: string,
    options: OptionsObject[],
    onMenubarItemClickHandler: () => void
}

const MenubarItem: FC<IMenubarItemProps> = ({ name, options, onMenubarItemClickHandler }): ReactElement => {
    const [isOptionsWindowOpen, setIsOptionsWindowOpen] = useState(false);

    const isOptionsWindowOpenClass = `${isOptionsWindowOpen ? 'menubarOnClickBackgroundColor' : ''}`

    const onMenubarItemClickHandler1 = () => {
        setIsOptionsWindowOpen(!isOptionsWindowOpen);
    }


    return (
        <>
            <li className={`MenubarItem ${isOptionsWindowOpenClass}`} onClick={onMenubarItemClickHandler1}>
                {name}
                <MenubarItemOptionsWindow
                    isOptionsWindowOpen={isOptionsWindowOpen}
                    options={options}
                />
            </li>
        </>
    )
}

export default MenubarItem
export {
    MenubarItem
}