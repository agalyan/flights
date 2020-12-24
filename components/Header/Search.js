import React from 'react';
import { useDispatch } from 'react-redux';
import { searchFlights } from '../../actions/flightActions';

const Search = () => {

  const dispatch = useDispatch();
  const doSearch = () => dispatch(searchFlights());

  return (
    <div className=''>
      <button 
      className='w-full'
      onClick={doSearch}
      >
        {'Search Flights'}
      </button>
    </div>
  )
}

export default Search;
