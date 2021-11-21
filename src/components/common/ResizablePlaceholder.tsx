import { Children, MutableRefObject, useCallback, useRef, useState } from 'react';

import { FC } from 'react';
import { ReactElement } from 'react';

export const defaultDrawerWidth = 170;
const minDrawerWidth = 170;
const maxDrawerWidth = 1000;
let isResizing = false;

interface IResizablePlaceholderProps {
  children: ReactElement
}
const ResizablePlaceholder: FC<IResizablePlaceholderProps> = ({ children }) => {
  const [drawerWidth, setDrawerWidth] = useState(defaultDrawerWidth);

  const resizablePlaceholderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);


  const handleMouseDown = (evt: any) => {
    evt.stopPropagation();
    evt.preventDefault();
    console.log('in  handleMouseDown', evt.clientX, resizablePlaceholderRef?.current);
    resizablePlaceholderRef.current?.addEventListener('mouseup', handleMouseUp, true);
    resizablePlaceholderRef.current?.addEventListener('mousemove', handleMouseMove, true);
    isResizing = true;
  }


  const handleMouseUp = (evt: any) => {
    console.log('in  handleMouseUp', evt.clientX);
    if (!isResizing) {
      return;
    }
    isResizing = false;
    resizablePlaceholderRef.current?.removeEventListener('mouseup', handleMouseUp, true);
    resizablePlaceholderRef.current?.removeEventListener('mousemove', handleMouseMove, true);

  }

  const handleMouseMove = useCallback(e => {
    if (!isResizing) {
      return;
    }

    let offsetRight =
      document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
    let minWidth = 50;
    if (offsetRight > minWidth) {
      let curSize = offsetRight - 60;
      // using a ref instead of state will be way faster
      if (resizablePlaceholderRef.current && resizablePlaceholderRef.current) {
        resizablePlaceholderRef.current.style.width = curSize + 'px';
      }
    }
    // const newWidth = e.clientX - document.body.offsetLeft;
    // if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
    //   setDrawerWidth(newWidth);

    //   if (resizablePlaceholderRef.current && resizablePlaceholderRef.current.parentNode && resizablePlaceholderRef.current.parentElement?.style) {
    //     // resizablePlaceholderRef.current.style.width = drawerWidth + 'px';
    //     // resizablePlaceholderRef.current.parentElement.style.width = newWidth + 'px';
    //   }
    // }
  }, []);


  return (
    <div
      className='ResizablePlaceholder-container'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={resizablePlaceholderRef}
    >
      {children}
    </div>
  )
}

export default ResizablePlaceholder
