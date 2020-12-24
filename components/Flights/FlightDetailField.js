import React from 'react';

const FlightDetailField = ({ title, details }) => {
  return (
    <div className='flex my-3'>
      <span className='font-medium w-1/2'>{`${title}:`}</span>
      <span className='w-1/2'>{details}</span>
    </div>
  )
}
export default FlightDetailField;
