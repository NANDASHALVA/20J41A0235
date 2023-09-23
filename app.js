import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrainScheduleApp = () => {
    const [trains, setTrains] = useState([
        // Sample data
        { trainName: 'Train 1', destination: 'Destination 1', arrivalTime: '09:00 AM', status: 'On time' },
        { trainName: 'Train 2', destination: 'Destination 2', arrivalTime: '10:30 AM', status: 'Delayed' },
        { trainName: 'Train 3', destination: 'Destination 3', arrivalTime: '11:45 AM', status: 'On time' }
    ]);
  
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Train Name</th>
                        <th>Destination</th>
                        <th>Arrival Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train, index) => (
                        <tr key={index}>
                            <td>{train.trainName}</td>
                            <td>{train.destination}</td>
                            <td>{train.arrivalTime}</td>
                            <td>{train.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ReactDOM.render(<TrainScheduleApp />, document.getElementById('root'));
