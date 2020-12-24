import React from 'react';
import { useSelector } from 'react-redux';


const FlightsTotal = () => {
  const flightsCount = useSelector(state => state.flights.length);

  return (
    <div className='p-2'>
      <span className='font-medium'>{`Flights count: ${flightsCount}`}</span>
    </div>
  )
}

export default FlightsTotal;
