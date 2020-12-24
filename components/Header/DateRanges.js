import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { alterQuery } from '../../actions/queryActions';

const rangeInputClasses = 'text-base p-2 text-center border-2 focus:border-yellow-400 focus:outline-none';

const DateRanges = () => {

  const dispatch = useDispatch();

  const startInitial = new Date();
  const [dateFrom, setDateFrom] = useState(startInitial);
  const [dateTo, setDateTo] = useState(moment(startInitial).add(1, "days").toDate());

  useEffect(() => {
    dispatch(alterQuery({ field: 'dateFrom', value: moment(dateFrom).format('DD/MM/YYYY') }));
  }, [dateFrom]);

  useEffect(() => {
    dispatch(alterQuery({ field: 'dateTo', value: moment(dateTo).format('DD/MM/YYYY') }));
  }, [dateTo]);

  const onChangeStart = (date) => setDateFrom(date);
  const onChangeEnd = (date) => setDateTo(date);

  return (
    <div className='md:flex flex-col md:flex-row py-2'>
      <DateRangeItem label={'From:'} selected={dateFrom} onChange={onChangeStart} />
      <DateRangeItem label={'To:'} selected={dateTo} onChange={onChangeEnd} />

    </div>
  )
}

const DateRangeItem = ({ label, selected, onChange }) => {
  return (
    <span className='flex justify-center'>
      <span className='p-3 w-1/5'>{label}</span>
      <DatePicker
        className={rangeInputClasses}
        selected={selected}
        onChange={onChange}
      />
    </span>
  )
}

export default DateRanges;
