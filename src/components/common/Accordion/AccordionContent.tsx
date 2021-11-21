import { FC } from 'react'
import { ReactNode } from 'react'
import { RefObject } from 'react';

interface IAccordionContentProps {
  children: ReactNode,
  isAccordionCollapsed?: boolean,
  accordionContentRef?: RefObject<HTMLDivElement>
}

const AccordionContent: FC<IAccordionContentProps> = ({ accordionContentRef, children, isAccordionCollapsed }) => {
  const accordionHeightClass = `${isAccordionCollapsed ? 'collapsed-accordion-height' : 'expanded-accordion-height'}`;

  return (
    <div className={`Accordion-content ${accordionHeightClass}`} ref={accordionContentRef}>
      {children}
    </div>
  )
}

export default AccordionContent
export {
  AccordionContent
}