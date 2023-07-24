/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';

import { initialQueryState, KTIcon, useDebounce } from '../../../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider';

import 'react-datepicker/dist/react-datepicker.css';

const AssetsListSearchComponent = () => {
  const { updateState } = useQueryRequest()
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 150)
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm !== undefined && searchTerm !== undefined) {
        updateState({ search: debouncedSearchTerm, ...initialQueryState })
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
    // More details about useDebounce: https://usehooks.com/useDebounce/
  )

  return (
    <div className='card-title'>
      {/* begin::Search */}
      <div className='d-flex align-items-center position-relative my-1'>
        <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
        <input
          type='text'
          data-kt-user-table-filter='search'
          className='form-control form-control-solid w-250px ps-14'
          placeholder='Search metadata'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="col-md-5 m-7">
          <label>Start Date:</label>
          &nbsp;&nbsp;&nbsp;
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="form-control form-control-solid"
          />
        </div>
        <div className="col-md-5">
          <label>End Date:</label>
          &nbsp;&nbsp;&nbsp;
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="form-control form-control-solid"
          />
        </div>
        <div>
          <button
            // disabled={isLoading}
            type='button'
            className='btn btn-primary me-3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
          >
            Search
          </button>
        </div>
      </div>
      {/* end::Search */}
    </div>
  )
}

export { AssetsListSearchComponent }
