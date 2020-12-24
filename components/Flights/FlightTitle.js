import React, { useState } from 'react';
import moment from 'moment';
import { faChevronDown, faChevronUp, faPlane, faClock, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const FlightTitle = ({ data, isExpanded, toggleExpansion }) => {
  return (
    <div className='flex font-normal justify-between mb-1 p-5 leading-5 cursor-pointer' onClick={toggleExpansion}>
      <div className='flex space-x-3 w-4/5'>
        <span className='w-1/5'>{moment.unix(data.dTime).format('MMM DD | HH:mm')}</span>
        <span className='w-2/5'>
          {data.cityFrom}
          <span className='mx-3'><FontAwesomeIcon icon={faPlane} color="#777" /></span>
          {data.cityTo}
        </span>
        <span className='w-1/5'>
          <span className='mx-3'><FontAwesomeIcon icon={faClock} color="#777" /></span>
          {data.fly_duration}
        </span>
        <span className='w-1/5'>
          <span className='mx-1'><FontAwesomeIcon icon={faEuroSign} color="#777" /></span>
          {data.price}
        </span>
      </div>

      <span className='float-right'>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} color="#ccc" size='lg' />
      </span>
    </div>
  )
}

export default FlightTitle;
