import React from 'react'
import styles from './sidebar.module.css'
import { RefreshRightSquare, Home, Send2, DocumentUpload, CloudDrizzle, Trash } from 'iconsax-react'
import AddNewMenu from '../Menu/Menu'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const SectionTitle = ({ title }) => <div className={styles.sectionTitle}>{title}</div>
  const MenuItem = ({ icon, label, to }) => {
    const getActiveStyle = ({ isActive }) => (isActive ? { color: '#121212', background: '#f6f6f8' } : {})
    return (
      <NavLink className={styles.menuItem} style={getActiveStyle} to={to}>
        {icon}
        <span>{label}</span>
      </NavLink>
    )
  }
  return (
    <div className={styles.sidebarContainer}>
      <Logo />
      <div className={styles.sidebar}>
        <div className={styles.menuContaier}>
          <AddNewMenu />
          <MenuItem icon={<Home size='23' variant='Bold' />} label='Home' to='/' />
          <SectionTitle title='All Files' />
          <MenuItem icon={<RefreshRightSquare size='24' variant='Bold' />} label='Recent' to='/recent' />
          <MenuItem icon={<Send2 size='24' variant='Bold' />} label='Sent' to='/sent' />
          <MenuItem icon={<DocumentUpload size='24' variant='Bold' />} label='Uploaded' to='/uploaded' />
          <MenuItem icon={<CloudDrizzle size='24' variant='Bold' />} label='Drafts' to='/drafts' />
          <MenuItem icon={<Trash size='24' variant='Bold' />} label='Deleted' to='/deleted' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
