import React from 'react';
import FlightDetailField from './FlightDetailField';

const FlightDetails = ({ data }) => {

  return (
    <div className='flex justify-between p-5'>
      <div className='md:w-4/5'>
        <FlightDetailField title='Airlines' details={`${data.airlines}`} />
        <FlightDetailField title='Availability' details={`${data.availability.seats || 0} seats`} />
        <FlightDetailField title='Distance' details={`${data.distance}`} />
      </div>
      <div className='hidden md:flex flex-col justify-center space-y-4 '>
        <button>{'Book Now'}</button>
      </div>
    </div>
  )
}

export default FlightDetails;
