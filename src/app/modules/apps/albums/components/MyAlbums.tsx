/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router'

import {KTIcon} from '../../../../../_metronic/helpers'


const MyAlbums: React.FC = () => {
    const navigate = useNavigate();

    const onAlbumSelected = () => {
        navigate('/apps/albums/edit-album');
    }
  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Albums</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7 cursor-pointer'>
          {/* begin::Icon */}
          <span className=' text-warning me-5'>
            <KTIcon iconName='abstract-26' className='text-warning fs-1 me-5' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Golf award winning session
            </a>
            <span className='text-muted fw-semibold d-block'>Create 2 Days ago</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-warning py-1 text-decoration-underline' onClick={onAlbumSelected}>28 Files</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7 cursor-pointer'>
          {/* begin::Icon */}
          <span className=' text-success me-5'>
            <KTIcon iconName='abstract-26' className='text-success fs-1 me-5' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
                Group lunch celebration
            </a>
            <span className='text-muted fw-semibold d-block'>Create 3 Days ago</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-success py-1 text-decoration-underline'>50 Files</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7 cursor-pointer'>
          {/* begin::Icon */}
          <span className=' text-danger me-5'>
            <KTIcon iconName='abstract-26' className='text-danger fs-1 me-5' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Rebrand strategy planning
            </a>
            <span className='text-muted fw-semibold d-block'>Create a week ago</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-danger py-1 text-decoration-underline'>27 Files</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-info rounded p-5 cursor-pointer'>
          {/* begin::Icon */}
          <span className=' text-info me-5'>
            <KTIcon iconName='abstract-26' className='text-info fs-1 me-5' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a href='#' className='fw-bold text-gray-800 text-hover-primary fs-6'>
              Product goals strategy
            </a>
            <span className='text-muted fw-semibold d-block'>Create a month ago </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className='fw-bold text-info py-1 text-decoration-underline'>8 Files</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {MyAlbums}
