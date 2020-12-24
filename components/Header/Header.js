import React from 'react';
import DateRanges from './DateRanges';
import FlightDirections from './FlightDirections';
import Search from './Search';

const Header = () => {

  return (
    <div className='mb-8 p-5 flex justify-between bg-white'>
      <FlightDirections />
      <div className='flex flex-col justify-evenly'>
        <DateRanges />
        <Search />
      </div>
    </div>
  )
}

export default Header;
