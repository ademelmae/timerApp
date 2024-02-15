import React, { useEffect, useState } from 'react';
import "./styles.css";

export default function TimerCard({ timer, onRemove, onReset}) {
    const { id, time} = timer;
    const [count, setCount] = useState(time);
    const [pause, setPause] = useState(false);

    const decrementValue = () => {
         setCount(count - 1)
    };

    const handleResetTimer = () => {
        setCount(time)
    };

    const pauser = ()=>{
        setPause(!pause);
    }
    const closeButtonStyle = {
        position: "absolute", 
        top: "5px", 
        right: "5px",
        color: "white"
    };

    // useEffect(() => {
    //     if (!pause && count > 0) { 
    //         const countDown = setTimeout(() => {
    //             if (count > 0) {
    //                 setCount(count - 1)
    //             }
    //         }, 1000);
            
    //         count === 0 && clearTimeout(countDown);
    //     }
    // }, [count, pause]);
 
    useEffect(() => {
        const countDown = setTimeout(() => {
          if (count > 0 && !pause) {
            decrementValue(id);
          }
        }, 1000);
    
        return () => clearTimeout(countDown); 
      }, [count, pause]);


    const handleRemove = () => {
        // clearTimeout();
        onRemove(id);
    };

    return (
        <div className={` ${count === 0 ? "finished" : "counting"}`}>
            <button className="btn-close"  aria-label="Close" onClick={handleRemove}></button>
            <div className="card">
              
                <h1 style={{fontSize:30}}> Countdown: {count}</h1>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button className='btn btn-success' style={{ width: "45%" }} onClick={pauser}><i class="bi bi-pause"></i></button>
                    <button className='btn btn-warning' style={{ width: "45%" }} onClick={handleResetTimer}>Reset</button>
                </div>
            </div>
        </div>
    );
}
