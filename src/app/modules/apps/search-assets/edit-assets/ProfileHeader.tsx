/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {Link, useLocation, useParams} from 'react-router-dom'
import {Dropdown1} from '../../../../../_metronic/partials'
import { AssetsList } from '../assets-list/list/items/AssetsList';

interface LocationAssetsState {
  index: number;
  title: string;
  url: string;
  size: string;
  status: string;
  date: string;
  metaData: Array<string>;
}

const ProfileHeader: React.FC = () => {
  const location = useLocation();
  const params = useParams();

  console.log('location', params);
  
  const {index} = location.state as LocationAssetsState ?? {index: 1};

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl(AssetsList[index].url)} alt='Metornic' />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                  {AssetsList[index].title}
                  </a>
                  <a href='#'>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='time' className='fs-4 me-1' />
                    {AssetsList[index].date}
                  </a>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>150</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Shares</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>60%</div>
                    </div>
                    <div className='fw-bold fs-6 text-gray-400'>Re-share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/apps/edit-assets/overview' && 'active')
                }
                to='/apps/edit-assets/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/apps/edit-assets/projects' && 'active')
                }
                to='/apps/edit-assets/projects'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/apps/edit-assets/campaigns' && 'active')
                }
                to='/apps/edit-assets/campaigns'
              >
                Campaigns
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/apps/edit-assets/documents' && 'active')
                }
                to='/apps/edit-assets/documents'
              >
                Documents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/apps/edit-assets/connections' && 'active')
                }
                to='/apps/edit-assets/connections'
              >
                Connections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
