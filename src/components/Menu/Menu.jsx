import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import './menu.css'

export default function AddNewMenu() {
  return (
    <Menu menuButton={<MenuButton className='menu-button'>Add New</MenuButton>} transition>
      <MenuItem>New File</MenuItem>
      <MenuItem>New Folder</MenuItem>
    </Menu>
  )
}
