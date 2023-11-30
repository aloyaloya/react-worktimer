import { observer } from 'mobx-react-lite'
import React from 'react'
import tasks from '../../store/tasks'

const TaskCardTimer = observer(( props ) => {

  return (
    <div className='h-[48px] flex gap-x-2'>
        <div className='flex py-2 px-4 rounded-lg w-full bg-gradient-to-r from-slate-100 to bg-slate-300 text-lg font-bold'>
            <div>{props.name}</div>
            <div className='ml-6 text-slate-500'>{props.description}</div>
        </div>
        <div className='btn btn-square h-[48px]' onClick={() => props.takeTask(props.duration)}>f</div>
    </div>
  )
})

export default TaskCardTimer;