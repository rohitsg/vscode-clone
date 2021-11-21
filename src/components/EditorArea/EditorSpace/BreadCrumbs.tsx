import BreadCrumbsItem from "./BreadCrumbsItem"

const breadCrumbsHirarchy = [{
  title: 'src',
  isFolder: true
}, {
  title: 'components',
  isFolder: true
}, {
  title: 'EditArea',
  isFolder: true
}, {
  title: 'EditArea',
  isFolder: true
}, {
  title: 'EditArea',
  isFolder: true
}, {
  title: 'BreadCrumbs.tsx',
  isFolder: false
},];

const BreadCrumbs = () => {
  return (
    <div className='BreadCrumbs-container'>
      {breadCrumbsHirarchy.map((breadCrumb) => {
        const { title, isFolder } = breadCrumb;
        return (
          <BreadCrumbsItem
            title={title}
            isFolder={isFolder}
          />
        )
      })}
    </div>
  )
}

export default BreadCrumbs
export {
  BreadCrumbs
}