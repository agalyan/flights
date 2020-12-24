import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const FlightItem = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className='p-5'>
      <div className='cursor-pointer font-normal mb-1 leading-5' onClick={toggleExpansion}>
        <span>{`${data.cityFrom} -> ${data.cityTo}`}</span>
        <span className='float-right'>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} color="#777" size='lg' />
        </span>
      </div>
      { isExpanded &&
        <div>
          {`Flight Details..`}
        </div>
      }
    </div>
  )
}

export default FlightItem;
