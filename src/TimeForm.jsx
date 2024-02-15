import React, { useState } from 'react';

export default function TimeForm({ onAddTimer }) {
    const [time, setTime] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (time) {
            onAddTimer(time);
            setTime("");
        }
    };

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="timeInput"></label>
                <input
                    type="text"
                    placeholder="Enter time"
                    className="input-field"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}
