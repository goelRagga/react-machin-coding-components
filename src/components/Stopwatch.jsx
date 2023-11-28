import React, { useEffect, useState } from "react";

const Stopwatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(5400);

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => {
                    if (time > 0) {
                        return time - 1
                    }
                    else {
                        setIsActive(false)
                        return 0;
                    }
                })
            },1000)
        }
        return () => clearInterval(interval)

    }, [isActive])


    const handleStart =() =>{
        setIsActive(true)
    }

    const handleStop = () =>{
        setIsActive(false)
    }
    const handleReset = () =>{
        setIsActive(false);
        setTime(54000)
    }

    const handlePauseResume =() =>{
        setIsActive((prev)=>!prev)
    }
    
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0'); // seconds to hour
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

    return (
        <div className="" style={{textAlign:"center"}}>
            <h1>Timer</h1>

            <div style={{marginTop:"10px"}}>
                <p style={{fontSize:"40px", fontWeight:"800"}}>{formatTime(time)}</p>
            </div>

            <div>
                <button style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}} onClick={handleStart}> Start </button>
                <button style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}} onClick={handlePauseResume}> Pause / Resume </button>
                <button style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}} onClick={handleStop}> Stop </button>
                <button style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}} onClick={handleReset}> Reset </button>
            </div>
        </div>
    )
}

export default Stopwatch;