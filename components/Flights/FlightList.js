import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import EmptyList from './EmptyList';
import FlightItem from './FlightItem';

const FlightList = () => {
  const flights = useSelector(state => state.flights);
  const isLoading = useSelector(state => state.requestInProgress);

  const renderFlight = flight => (<FlightItem key={flight.id} data={flight} />);

  return (
    <div className='divide-y h-full'>
      { isLoading ?
        <div className='flex flex-col h-full justify-center text-center text-xl'>
          <FontAwesomeIcon className='block m-auto' icon={faSpinner} color="grey" size='3x' spin />
        </div> :
        <React.Fragment>
          {flights.length > 0 ? flights.map(renderFlight) : <EmptyList />}
        </React.Fragment>
      }
    </div>
  )
}

export default FlightList;
