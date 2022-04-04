import React from 'react'
import styles from './sidebar.module.css'
import { DocumentText } from 'iconsax-react'

function Logo() {
  return (
    <div className={`${styles.logo} flex justify-start items-center`}>
      <div className='bg-primary p-2 rounded mr-2'>
        <DocumentText color='#fff' size='16' variant='Bold' />
      </div>
      <div>DMS</div>
    </div>
  )
}

export default Logo
