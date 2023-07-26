/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card3} from '../../../../../../_metronic/partials/content/cards/Card3'

export function AccessControl() {
  return (
    <>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-6.jpg'
            name='Emma Smith'
            job='Admin'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='danger'
            name='Melody Macy'
            job='Viewer'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-1.jpg'
            name='Max Smith'
            job='Admin'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-5.jpg'
            name='Sean Bean'
            job='Editor'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            avatar='/media/avatars/300-25.jpg'
            name='Brian Cox'
            job='Downloader'
          />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <Card3
            color='warning'
            name='Mikaela Collins'
            job='Admin'
          />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
