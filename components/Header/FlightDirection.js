import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alterQuery } from '../../actions/queryActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FlightDirection = ({ direction, text, icon }) => {

  const dispatch = useDispatch();
  const [airport, setAirport] = useState('');
  const onAirportChange = (e) => {
    setAirport(e.target.value.toUpperCase());
  };

  useEffect(() => {
    dispatch(alterQuery({field: direction, value: airport}));
  }, [airport]);

  return (<div className='relative mb-8 text-center'>
    <FontAwesomeIcon className='absolute top-4 left-1 md:left-8' color='#777' size='lg' icon={icon} />
    <input type='text'
      className='w-full py-4 md:px-20 px-7 border-2 focus:border-yellow-400 focus:outline-none'
      placeholder={text}
      value={airport}
      onChange={onAirportChange}
    />
  </div>
  )
}

export default FlightDirection;
