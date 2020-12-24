import React from 'react';
import Flights from './Flights/Flights';
import Header from './Header/Header';

const FlightsPage = () => {

  return (
    <div className='p-3 md:p-10'>
      <Header />
      <div className='md:flex justify-between md:space-x-6'>
        <Flights />
      </div>
    </div>
  )
}

export default FlightsPage;
