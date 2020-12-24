import React, { useState } from 'react';
import FlightDetails from './FlightDetails';
import FlightTitle from './FlightTitle';

const FlightItem = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <FlightTitle data={data} isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      { isExpanded && <FlightDetails data={data} isExpanded={isExpanded} /> }
    </div>
  )
}

export default FlightItem;
