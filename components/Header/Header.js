import React from 'react';
import DateRanges from './DateRanges';
import FlightDirections from './FlightDirections';
import Search from './Search';

const Header = () => {

  return (
    <div className='h-1/5 mb-8 p-5 flex justify-between bg-white border border-yellow-400'>
      <FlightDirections />
      <div className='flex flex-col justify-between'>
        <DateRanges />
        <Search />
      </div>
    </div>
  )
}

export default Header;
