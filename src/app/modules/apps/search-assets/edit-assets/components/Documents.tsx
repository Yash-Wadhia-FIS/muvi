/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { KTIcon } from '../../../../../../_metronic/helpers'
import { Card4 } from '../../../../../../_metronic/partials/content/cards/Card4'

export function Documents() {
  const [status, setStatus] = useState<string | undefined>()
  const [sharing, setSharing] = useState<string | undefined>()
  const [urlExpiry, setUrlExpiry] = useState<string | undefined>()
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Settings
        </h3>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        <div className='col-12 col-sm-12 col-xl'>
          <div className='card h-100'>
          <div className='card-body d-flex flex-column p-8'>
            <div className='mb-10'>
              <label className='form-label fs-6 fw-bold'>Status:</label>
              <select
                className='form-select form-select-solid fw-bolder'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                data-kt-user-table-filter='role'
                data-hide-search='true'
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value=''></option>
                <option value='Administrator'>Active</option>
                <option value='Analyst'>Inactive</option>
              </select>
            </div>
          </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-xl'>
        <div className='card h-100'>
          <div className='card-body d-flex flex-column p-8'>
            <div className='mb-10'>
              <label className='form-label fs-6 fw-bold'>Sharing:</label>
              <select
                className='form-select form-select-solid fw-bolder'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                data-kt-user-table-filter='role'
                data-hide-search='true'
                onChange={(e) => setSharing(e.target.value)}
                value={sharing}
              >
                <option value=''></option>
                <option value='Administrator'>Enable</option>
                <option value='Analyst'>Disable</option>
              </select>
            </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-xl'>
          <div className='card h-100'>
            <div className='card-body d-flex flex-column p-8'>
              <div className='mb-10'>
                <label className='form-label fs-6 fw-bold'>URL Expiry:</label>
                <select
                  className='form-select form-select-solid fw-bolder'
                  data-kt-select2='true'
                  data-placeholder='Select option'
                  data-allow-clear='true'
                  data-kt-user-table-filter='role'
                  data-hide-search='true'
                  onChange={(e) => setUrlExpiry(e.target.value)}
                  value={urlExpiry}
                >
                  <option value=''></option>
                  <option value='Administrator'>Tomorrow</option>
                  <option value='Analyst'>3 days</option>
                  <option value='Developer'>1 Week</option>
                  <option value='Support'>1 Month</option>
                  <option value='Trial'>Never</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
