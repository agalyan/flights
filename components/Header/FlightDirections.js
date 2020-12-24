import React from 'react';
import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import FlightDirection from './FlightDirection';

const FlightDirections = () => {
  return (
    <div>
      <FlightDirection icon={faPlaneDeparture} text='Departure' direction='flyFrom' />
      <FlightDirection icon={faPlaneArrival} text='Arrival' direction='to' />
    </div>
  )
}

export default FlightDirections;
