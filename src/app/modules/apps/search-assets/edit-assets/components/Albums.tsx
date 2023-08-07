/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import { KTIcon } from '../../../../../../_metronic/helpers'
import { AlbumList } from '../../../albums/items/AlbumList'

export function Albums() {
  const [isUploadEnabled, setUploadEnabled] = useState(false);

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('.widget-9-check');
    let checked = false;

    checkboxes.forEach((checkbox: any) => {
      if (checkbox.checked) {
        checked = true;
      }
    });

    setUploadEnabled(checked);
  };
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Albums
        </h3>
      </div>
      <div className={`card`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'></span>
            <span className='text-muted mt-1 fw-semibold fs-7'></span>
          </h3>
          <div
            className='card-toolbar'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-trigger='hover'
            title='Click to add a user'
          >
            {isUploadEnabled && <a
              href='#'
              className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
            >
              Upload
            </a>}
          </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-9-check'

                      />
                    </div>
                  </th>
                  <th className='min-w-150px'>Album name</th>
                  <th className='min-w-140px'>Files</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {AlbumList.map((data, index) => (
                  <tr>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input widget-9-check' type='checkbox' value='1' onChange={handleCheckboxChange} />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          <KTIcon iconName='abstract-26' className='text-primary fs-1 me-5' />
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                            {data.title}
                          </a>
                          <span className='text-muted fw-semibold text-muted d-block fs-7'>
                            {data?.date}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        Number of files
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        {data?.files}
                      </span>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='switch' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTIcon iconName='pencil' className='fs-3' />
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        >
                          <KTIcon iconName='trash' className='fs-3' />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
    </>
  )
}
