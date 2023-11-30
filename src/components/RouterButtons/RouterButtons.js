import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react';
import React from 'react'

const RouterButtons = observer(() => {
  return (
    <div className='flex gap-2'>
        <div className='btn btn-square btn-ghost'><Icon icon="lucide:timer" width="36" height="36"/></div>
        <div className='btn btn-square btn-ghost'><Icon className='mt-1' icon="tdesign:assignment" width="36" height="36" /></div>
        <div className='btn btn-square btn-ghost'><Icon className='mt-1' icon="uim:analytics" width="36" height="36" /></div>
    </div>
  )
})

export default RouterButtons;