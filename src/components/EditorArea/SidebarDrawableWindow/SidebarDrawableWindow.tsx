import { Accordion, TextIcon } from '../../common';
import { FC, useCallback, useRef, } from 'react'
import { VscCheck, VscClearAll, VscCollapseAll, VscEllipsis, VscFilter, VscListTree, VscNewFile, VscRefresh } from 'react-icons/vsc';

import { BsFileEarmarkPlus } from 'react-icons/bs'
import Content from './Content';
import { DirectoryTree } from './DirectoryTree';
import Header from './Header';
import { MutableRefObject } from 'react';
import ResizablePlaceholder from '../../common/ResizablePlaceholder';
import { SIDEBAR_OPTIONS_WINDOW_NAMES } from '../EditorArea.enums';

interface ISidebarDrawableWindowProps {
  isOpen: boolean,
  windowName: string
}

let isResizing = false;

const SidebarDrawableWindow: FC<ISidebarDrawableWindowProps> = ({ isOpen, windowName }) => {
  const hideShowClass = `${isOpen ? 'show' : 'hide'}`;
  const windowNameUpperCase = windowName ? windowName.toUpperCase() : '';

  const resizablePlaceholderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);


  const handleMouseDown = (evt: any) => {
    evt.stopPropagation();
    evt.preventDefault();
    console.log('in  handleMouseDown', evt.clientX, resizablePlaceholderRef?.current);
    resizablePlaceholderRef.current?.addEventListener('mouseup', handleMouseUp);
    resizablePlaceholderRef.current?.addEventListener('mousemove', handleMouseMove);
    isResizing = true;
  }


  const handleMouseUp = (evt: any) => {
    console.log('in  handleMouseUp', evt.clientX);
    isResizing = false;
    resizablePlaceholderRef.current?.removeEventListener('mouseup', handleMouseUp);
    resizablePlaceholderRef.current?.removeEventListener('mousemove', handleMouseMove);
  }

  const handleMouseMove = useCallback(e => {
    console.log('move')
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
        resizablePlaceholderRef.current.style.backgroundColor = 'red';
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
    // <ResizablePlaceholder >
    <div className={`SidebarDrawableWindow-container ${hideShowClass}`}
    // onMouseDown={handleMouseDown}
    // ref={resizablePlaceholderRef}
    >
      {
        windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.EXPLORER ?
          (
            <>
              <Header
                windowName={windowNameUpperCase}
              >
                <TextIcon
                  tooltip='Views and More Actions...'
                  tooltipStyle={{
                    transform: 'translate(-101%, 90%)',
                    border: '0.5px solid dimgray',
                    overflowY: 'hidden',
                  }}
                  Icon={<VscEllipsis style={{
                    fontSize: '15px'
                  }} />}
                />
              </Header>
              <Content>
                {DirectoryTree.map((item) => {
                  return (
                    <Accordion
                      accordionName={'item.folder.folderName'}
                      data={item.folder}
                    >
                    </Accordion>
                  )
                })}
              </Content>
            </>
          ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.SEARCH ?
            (
              <>
                <Header
                  windowName={windowNameUpperCase}
                >
                  <TextIcon
                    tooltip='Refresh'
                    tooltipStyle={{
                      transform: 'translate(-101%, 90%)',
                      border: '0.5px solid dimgray',
                      overflowY: 'hidden',
                    }}
                    Icon={<VscRefresh style={{
                      fontSize: '15px'
                    }} />}
                  />

                  <TextIcon
                    tooltip='Clear Search Results'
                    tooltipStyle={{
                      transform: 'translate(-101%, 90%)',
                      border: '0.5px solid dimgray',
                      overflowY: 'hidden',
                    }}
                    Icon={<VscClearAll style={{
                      fontSize: '15px'
                    }} />}
                  />

                  <TextIcon
                    tooltip='Open New Search Editor'
                    tooltipStyle={{
                      transform: 'translate(-101%, 90%)',
                      border: '0.5px solid dimgray',
                      overflowY: 'hidden',
                    }}
                    Icon={<BsFileEarmarkPlus style={{
                      fontSize: '15px'
                    }} />}
                  />
                  <TextIcon
                    tooltip='Collapse All'
                    tooltipStyle={{
                      transform: 'translate(-101%, 90%)',
                      border: '0.5px solid dimgray',
                      overflowY: 'hidden',
                    }}
                    Icon={<VscCollapseAll style={{
                      fontSize: '15px'
                    }} />}
                  />
                </Header>

              </>
            ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.SOURCE_CONTROL ?
              (
                <>
                  <Header
                    windowName={windowNameUpperCase}
                  >
                    <TextIcon
                      tooltip='View as tree'
                      tooltipStyle={{
                        transform: 'translate(-101%, 90%)',
                        border: '0.5px solid dimgray',
                        overflowY: 'hidden',
                      }}
                      Icon={<VscListTree style={{
                        fontSize: '15px'
                      }} />}
                    />

                    <TextIcon
                      tooltip='Commit'
                      tooltipStyle={{
                        transform: 'translate(-101%, 90%)',
                        border: '0.5px solid dimgray',
                        overflowY: 'hidden',
                      }}
                      Icon={<VscCheck style={{
                        fontSize: '15px'
                      }} />}
                    />

                    <TextIcon
                      tooltip='Refresh'
                      tooltipStyle={{
                        transform: 'translate(-101%, 90%)',
                        border: '0.5px solid dimgray',
                        overflowY: 'hidden',
                      }}
                      Icon={<VscRefresh style={{
                        fontSize: '15px'
                      }} />}
                    />

                    <TextIcon
                      tooltip='Views and More Actions...'
                      tooltipStyle={{
                        transform: 'translate(-101%, 90%)',
                        border: '0.5px solid dimgray',
                        overflowY: 'hidden',
                      }}
                      Icon={<VscEllipsis style={{
                        fontSize: '15px'
                      }} />}
                    />
                  </Header>

                </>
              ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.RUN_AND_DEBUG ?
                (
                  <>
                    <Header
                      windowName={windowNameUpperCase}
                    >
                      <TextIcon
                        tooltip='Views and More Actions...'
                        tooltipStyle={{
                          transform: 'translate(-101%, 90%)',
                          border: '0.5px solid dimgray',
                          overflowY: 'hidden',
                        }}
                        Icon={<VscEllipsis style={{
                          fontSize: '15px'
                        }} />}
                      />
                    </Header>

                  </>
                ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.EXTENSIONS ?
                  (
                    <>
                      <Header
                        windowName={windowNameUpperCase}
                      >
                        <TextIcon
                          tooltip='Filter Extensions...'
                          tooltipStyle={{
                            transform: 'translate(-101%, 90%)',
                            border: '0.5px solid dimgray',
                            overflowY: 'hidden',
                          }}
                          Icon={<VscFilter style={{
                            fontSize: '15px'
                          }} />}
                        />

                        <TextIcon
                          tooltip='Refresh'
                          tooltipStyle={{
                            transform: 'translate(-101%, 90%)',
                            border: '0.5px solid dimgray',
                            overflowY: 'hidden',
                          }}
                          Icon={<VscRefresh style={{
                            fontSize: '15px'
                          }} />}
                        />

                        <TextIcon
                          tooltip='Clear Extensions Search Results'
                          tooltipStyle={{
                            transform: 'translate(-101%, 90%)',
                            border: '0.5px solid dimgray',
                            overflowY: 'hidden',
                          }}
                          Icon={<VscClearAll style={{
                            fontSize: '15px'
                          }} />}
                        />

                        <TextIcon
                          tooltip='Views and More Actions...'
                          tooltipStyle={{
                            transform: 'translate(-101%, 90%)',
                            border: '0.5px solid dimgray',
                            overflowY: 'hidden',
                          }}
                          Icon={<VscEllipsis style={{
                            fontSize: '15px'
                          }} />}
                        />


                      </Header>

                    </>
                  ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.GITLENS ?
                    (
                      <>
                        <Header
                          windowName={windowNameUpperCase}
                        >
                          <TextIcon
                            tooltip='Views and More Actions...'
                            tooltipStyle={{
                              transform: 'translate(-101%, 90%)',
                              border: '0.5px solid dimgray',
                              overflowY: 'hidden',
                            }}
                            Icon={<VscEllipsis style={{
                              fontSize: '15px'
                            }} />}
                          />
                        </Header>

                      </>
                    ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.SQLTOOLS ?
                      (
                        <>
                          <Header
                            windowName={windowNameUpperCase}
                          >
                            <TextIcon
                              tooltip='Views and More Actions...'
                              tooltipStyle={{
                                transform: 'translate(-101%, 90%)',
                                border: '0.5px solid dimgray',
                                overflowY: 'hidden',
                              }}
                              Icon={<VscEllipsis style={{
                                fontSize: '15px'
                              }} />}
                            />
                          </Header>

                        </>
                      ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.PLATFORMIO ?
                        (
                          <>
                            <Header
                              windowName={windowNameUpperCase}
                            />

                          </>
                        ) : windowName.trim() === SIDEBAR_OPTIONS_WINDOW_NAMES.DOCKER ?
                          (
                            <>
                              <Header
                                windowName={windowNameUpperCase}
                              >
                                <TextIcon
                                  tooltip='Views and More Actions...'
                                  tooltipStyle={{
                                    transform: 'translate(-101%, 90%)',
                                    border: '0.5px solid dimgray',
                                    overflowY: 'hidden',
                                  }}
                                  Icon={<VscEllipsis style={{
                                    fontSize: '15px'
                                  }} />}
                                />

                              </Header>

                            </>
                          ) : null
      }
    </div >
    // </ResizablePlaceholder>
  )
}

export default SidebarDrawableWindow
export {
  SidebarDrawableWindow
}