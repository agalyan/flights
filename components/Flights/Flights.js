import React from 'react';
import FlightList from './FlightList';
import FlightsTotal from './FlightsTotal';

const Flights = () => {
  return (
    <React.Fragment>
      <FlightsTotal />
      <div className='bg-white flex-1 divide-y h-3/5 md:h-3/4 overflow-y-auto border border-yellow-400'>
        <FlightList />
      </div>
    </React.Fragment>

  )
}

export default Flights;
