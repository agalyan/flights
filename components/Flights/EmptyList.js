import React from 'react';

const EmptyList = () => {
  return (
    <div className='flex flex-col h-full justify-center text-center text-xl'>
      <span>{`No flights found..`}</span>
    </div>
  );
};

export default EmptyList;
