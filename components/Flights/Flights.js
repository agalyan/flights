import React from 'react';
import FlightList from './FlightList';

const Flights = () => {
  return (
    <div className='bg-white flex-1 divide-y h-3/4 overflow-y-auto border border-yellow-400'>
      <FlightList />
    </div>
  )
}

export default Flights;
