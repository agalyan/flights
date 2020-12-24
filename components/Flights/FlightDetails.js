import React from 'react';
import FlightDetailField from './FlightDetailField';

const FlightDetails = ({ data }) => {

  return (
    <div className='flex justify-between p-3 md:px-20'>
      <div className='w-3/5 md:w-4/5'>
        <FlightDetailField title='Airlines' details={`${data.airlines}`} />
        <FlightDetailField title='Availability' details={`${data.availability.seats || 0} seats`} />
        <FlightDetailField title='Distance' details={`${data.distance}`} />
      </div>
      <div className='flex flex-col justify-center space-y-4 '>
        <button className=''>{'Book Now'}</button>
      </div>
    </div>
  )
}

export default FlightDetails;
