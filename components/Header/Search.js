import React from 'react';
import { useDispatch } from 'react-redux';
import { searchFlights } from '../../actions/flightActions';

const Search = () => {

  const dispatch = useDispatch();
  const doSearch = () => dispatch(searchFlights());

  return (
    <div className=''>
      <button 
      className='p-4 w-full bg-yellow-400 hover:bg-yellow-300 text-white focus:outline-none text-lg'
      onClick={doSearch}
      >
        {'Search Flights'}
      </button>
    </div>
  )
}

export default Search;
