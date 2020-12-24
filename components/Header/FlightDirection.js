import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { alterQuery } from '../../actions/queryActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { searchFlights } from '../../actions/flightActions';

const FlightDirection = ({ direction, text, icon }) => {

  const dispatch = useDispatch();
  const [airport, setAirport] = useState('');
  const onAirportChange = (e) => {
    setAirport(e.target.value.toUpperCase());
  };

  useEffect(() => {
    dispatch(alterQuery({field: direction, value: airport}));
  }, [airport]);

  // Handle enter pressure
  //
  const onAirportKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchFlights());
    }
  }

  return (<div className='relative text-center'>
    <FontAwesomeIcon className='absolute top-4 left-1 md:left-8' color='#777' size='lg' icon={icon} />
    <input type='text'
      className='w-full py-4 md:px-20 px-7 border-2 focus:border-yellow-400 focus:outline-none'
      placeholder={text}
      value={airport}
      onChange={onAirportChange}
      onKeyDown={onAirportKeyDown}
    />
  </div>
  )
}

export default FlightDirection;
