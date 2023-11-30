import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react';
import React from 'react'
import RouterButtons from '../../components/RouterButtons/RouterButtons';
import SettingsButtons from '../../components/SettingsButtons/SettingsButtons';

const Navbar = observer(() => {
  return (
    <div className='navbar-container flex gap-x-4 p-2 bg-gradient-to-r from-indigo-500 to bg-violet-700 rounded-xl w-full shadow-2xl'>
        <RouterButtons/>
        <SettingsButtons/>
    </div>
  )
})

export default Navbar;