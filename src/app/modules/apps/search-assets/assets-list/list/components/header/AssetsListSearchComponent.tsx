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

    <div className={`card`}>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-gray-300 align-middle gs-0'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                </th>
                <th className='min-w-150px'></th>
                <th className='min-w-140px'></th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    {/* <input className='form-check-input widget-9-check' type='checkbox' value='1' /> */}
                  </div>
                </td>
                <td>
                  <div className='d-inline-flex align-items-center'>
                    <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                    <input
                      type='text'
                      data-kt-user-table-filter='search'
                      className='form-control form-control-solid w-250px ps-14'
                      placeholder='Search albums'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="From Date"
                        className="form-control form-control-solid"
                      />
                    <div className='d-flex justify-content-start ms-4'>
                      <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="To Date"
                        className="form-control form-control-solid"
                      />
                    </div>
                  </div>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
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
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { AssetsListSearchComponent }
