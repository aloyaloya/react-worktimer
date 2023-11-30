import { observer } from 'mobx-react-lite'
import React from 'react'

const CountdownTimer = observer(( props ) => {
    const getFormattedTime = (milliseconds) => {
        let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        let totalHours = parseInt(Math.floor(totalMinutes / 60));

        let seconds = parseInt(totalSeconds % 60);
        let minutes = parseInt(totalMinutes % 60);
        let hours = parseInt(totalHours % 24);

        return [hours, minutes, seconds]
    }

  return (
    <div className='w-full text-center p-16 rounded-xl'>
        <span className="countdown font-mono text-[162px] font-extrabold bg-clip-text">
            <span style={{"--value": getFormattedTime(props.time)[0]}}></span>:
            <span style={{"--value": getFormattedTime(props.time)[1]}}></span>:
            <span style={{"--value": getFormattedTime(props.time)[2]}}></span>
        </span>
    </div>
  )
})

export default CountdownTimer;