import { FC } from 'react';

interface IAccordionProps {
  handleHeaderClick?: (evt: any) => void,

}

const AccordionHeader: FC<IAccordionProps> = ({ children, handleHeaderClick }) => {

  return (
    <div className={`Accordion-header `} onClick={handleHeaderClick}>
      {children}
    </div>
  )
}

export default AccordionHeader
export {
  AccordionHeader
}