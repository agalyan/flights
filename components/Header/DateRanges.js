import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { alterQuery } from '../../actions/queryActions';


const DateRanges = () => {

  const dispatch = useDispatch();

  const startInitial = new Date();
  const [dateFrom, setDateFrom] = useState(startInitial);
  const [dateTo, setDateTo] = useState(moment(startInitial).endOf('day').toDate());

  useEffect(() => {
    dispatch(alterQuery({field: 'dateFrom', value: moment(dateFrom).format('DD/MM/YYYY')}));
  }, [dateFrom]);

  useEffect(() => {
    dispatch(alterQuery({field: 'dateTo', value: moment(dateTo).format('DD/MM/YYYY')}));
  }, [dateTo]);

  const onChangeStart = (date) => setDateFrom(date);
  const onChangeEnd = (date) => setDateTo(date);

  return (
    <span>
      <span>From:</span>
      <span className='inline-block'>
        <DatePicker
          selected={dateFrom}
          onChange={onChangeStart}
        />
      </span>
      <span>To:</span>
      <span className='inline-block'>
        <DatePicker
          selected={dateTo}
          onChange={onChangeEnd}
        />
      </span>

    </span>
  )
}

export default DateRanges;
