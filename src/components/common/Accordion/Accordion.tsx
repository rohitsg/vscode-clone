import './style.scss'

import { FC, useRef, useState } from 'react'

import { AccordionContent } from './AccordionContent'
import { AccordionHeader } from './AccordionHeader'
import LeftSideActionIcons from './LeftSideActionIcons'
import RightSideActionIcons from './RightSideActionIcons'

export interface FilesStructure {
  fileName?: string,
  folder?: FolderStructure
}

export interface FolderStructure {
  folderName: string;
  files?: FilesStructure[];
}

export interface DirectoryStructure {
  folder: FolderStructure
}

interface IAccordionProps {
  accordionName?: string,
  handleAccordionClick?: () => void,
  isCollapsed?: boolean,
  data?: FolderStructure | null
}

const Accordion: FC<IAccordionProps> = ({ children, accordionName = '', data, handleAccordionClick, isCollapsed }) => {
  const accordionContentRef = useRef(null);
  const [isAccordionCollapsed, setIsAccordionCollapsed] = useState(true);
  const accordionHeightClass = `${isAccordionCollapsed ? 'collapsed-accordion-height' : 'expanded-accordion-height'}`;


  const handleOnClick = (evt: any) => {
    evt.preventDefault();
    setIsAccordionCollapsed(!isAccordionCollapsed);
    console.log('ref', accordionContentRef)
  }

  return children ? (<div className={`Accordion-container `} > {children} </div>) : (
    <div className={`Accordion-container `} >
      {
        data?.files?.map((item) => {
          return (
            <>
              <AccordionHeader
                handleHeaderClick={handleOnClick}
              >
                <LeftSideActionIcons
                  accordionName={item.fileName || ''}
                />

                <RightSideActionIcons />
              </AccordionHeader>

              <AccordionContent
                isAccordionCollapsed={isAccordionCollapsed}
                accordionContentRef={accordionContentRef}
              >
                Hi there
              </AccordionContent>
            </>
          )
        })
      }
    </div>
  )
}

export default Accordion
export {
  Accordion
}