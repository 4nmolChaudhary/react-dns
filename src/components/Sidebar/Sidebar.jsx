import React from 'react'
import styles from './sidebar.module.css'
import { RefreshRightSquare } from 'iconsax-react'
import AddNewMenu from '../Menu/Menu'

function Sidebar() {
  const SectionTitle = ({ title }) => <div className={styles.sectionTitle}>{title}</div>
  const MenuItem = ({ icon, label }) => (
    <button className={styles.menuItem}>
      {icon}
      <span>{label}</span>
    </button>
  )
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuContaier}>
        <AddNewMenu />
        <SectionTitle title='All Files' />
        <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Recent' />
        <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Sent' />
        <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Uploaded' />
        <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Drafts' />
        <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Deleted' />
      </div>
    </div>
  )
}

export default Sidebar
