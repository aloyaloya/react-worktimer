import { observer } from 'mobx-react-lite'
import tasks from '../../store/tasks'
import React from 'react'
import TaskCardTimer from '../../components/TaskCardTimer/TaskCardTimer'
import { useState, useEffect } from 'react'
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer'

const Timer = observer(() => { 
    const[time, setTime] = useState(0);
    const[status, setStatus] = useState('stop')

    useEffect(() => {
        setTimeout(() => {
            if(status == 'start') {
                setTime(time - 1000);
            }
        }, 1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        let totalHours = parseInt(Math.floor(totalMinutes / 60));

        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt(totalMinutes % 60);
        let hours = parseInt(totalHours % 24);

        return [hours, minutes, seconds]
    }

    const handleClickStop = () => {
        setStatus('stop');
        setTime(0);

        console.log(status);
    }

    const handleClickPause = () => {
        if(status == 'pause') {
            setStatus('start')
        }

        if(status == 'start') {
            setStatus('pause')
        }

        console.log(status)
    }

    const handleClickStart = (time) => {
        setStatus('start')
        setTime(time * 1000)

        console.log(status)
    }


  return (
    <div className='w-full h-full'>
        <div className='h-full mt-auto'>
            <CountdownTimer time={time}/>
            <div className='flex w-full gap-x-4'>
                <div className='w-full tooltip' data-tip='The timer will count down the break time'>
                    <div className='w-full shadow-xl text-lg btn h-[64px] btn-success'>Need a break</div>
                </div>
                <div className='w-full'>
                    <div onClick={() => handleClickPause()}className='w-full shadow-xl text-lg btn h-[64px] btn-neutral'>Pause</div>
                </div>
                <div className='w-full tooltip' data-tip='The timer will be stopped'>
                    <div onClick={() => handleClickStop()}className='w-full shadow-xl text-lg btn h-[64px] btn-error'>Can't anymore</div>
                </div>
            </div>
            <div className="collapse bg-base-200 collapse-arrow rounded-xl mt-6 bg-gradient-to-r from-indigo-500 to bg-violet-700 shadow-xl">
                <input type="checkbox" /> 
                <div className="collapse-title text-lg font-bold m-auto align-middle h-[64px] text-center pl-12 uppercase ">
                    All tasks
                </div>
                <div className="collapse-content grid gap-y-2"> 
                    {tasks.tasksList.map((item, key) => {
                        return (
                            <TaskCardTimer 
                                key={key} 
                                name={item.taskName} 
                                id={item.taskId} 
                                description={item.taskDescription}
                                duration={item.taskDuration}
                                takeTask={(time) => handleClickStart(time)}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
})

export default Timer;