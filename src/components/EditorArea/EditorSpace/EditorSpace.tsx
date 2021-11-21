import BreadCrumbs from './BreadCrumbs'
import Editor from './Editor'
import OpenedFilesTabContainer from './OpenedFilesTabContainer'
import React from 'react'

const EditorSpace = () => {
  return (
    <div className='EditorSpace-container'>
      <OpenedFilesTabContainer />
      <BreadCrumbs />
      <Editor />
    </div>
  )
}

export default EditorSpace
export {
  EditorSpace
}