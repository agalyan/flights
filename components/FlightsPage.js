import React from 'react';
import Flights from './Flights/Flights';
import Header from './Header/Header';

const FlightsPage = () => {

  return (
    <div className='p-3 md:p-10 flex-col h-full '>
      <Header />
      <Flights />
    </div>
  )
}

export default FlightsPage;
