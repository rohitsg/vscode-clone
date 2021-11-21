import ClosableTab from './ClosableTab'

const LeftSideClosableTabs = () => {
  return (
    <div className='LeftSideClosableTabs-container'>
      <ClosableTab
        active={true}
      />
      <ClosableTab />
      <ClosableTab />
      <ClosableTab />
      <ClosableTab />
      <ClosableTab />
      <ClosableTab />
      <ClosableTab />
    </div>
  )
}

export default LeftSideClosableTabs
