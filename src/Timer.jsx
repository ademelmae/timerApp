import React, { useState } from 'react';
import TimerCard from "./TimerCard.jsx";
import TimeForm from "./TimeForm.jsx";
import "./styles.css";

export default function Timer() {
    const [timers, setTimers] = useState([]);

    const handleAddTimer = (time) => {
        const newTimer = {
            id: Date.now(),
            time: parseInt(time),
            currentValue: parseInt(time),
            pause: false,
        };
        setTimers([...timers, newTimer]);
    };

    const handleRemoveTimer = (id) => {
        setTimers(timers.filter(timer => timer.id !== id));
    };

    
    // const togglePause = (id) => {
    //     setTimers(timers.map(timer =>
    //         timer.id === id ? { ...timer, pause: !timer.pause } : timer
    //     ));
    // };

    // const handleReset = (id) => {
    //     setTimers(timers.map(timer =>
    //         timer.id === id ? { ...timer, time: timer.currentValue } : timer
    //     ));
    // };

    // const decrementValue = (id) => {
    //     setTimers((timers) => {
            
    //       return timers.map((timer) =>
          
    //         timer.id === id
    //           ? { ...timer, time: timer.time - 1 }
    //           : timer
    //       );
    //     });
    //   };
      
    return (
        <div className="container">
            <TimeForm onAddTimer={handleAddTimer} />
            <h1 className="header">Timers</h1>
            <div className="center-content">
                {timers.map(timer => (
                    <TimerCard 
                        key={timer.id} 
                        timer={timer} 
                        onRemove={handleRemoveTimer} 
                        // onReset={handleReset}
                        // onDecrement = {decrementValue}
                    />
                ))}
            </div>
        </div>
    );
}
