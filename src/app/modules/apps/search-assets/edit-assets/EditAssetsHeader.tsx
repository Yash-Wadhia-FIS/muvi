/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'
import { AssetsList } from '../assets-list/list/items/AssetsList';
import { useIntl } from 'react-intl';
import {useSelector, shallowEqual} from 'react-redux';

import {KTIcon} from '../../../../../_metronic/helpers'
import { RootState } from '../../../../store';
import { ImageModal } from '../../../../../_metronic/partials/modals/image-modal/ImageModal';
import "../css/EditAssetsHeader.css";

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
  const intl = useIntl();

  const assets = useSelector((state: RootState) => state.assets.assets, shallowEqual);

  const [openImage, setOpenImage] = useState<boolean>(false);
  const [openImageURL, setOpenImageURL] = useState<string>('');
  
  const {id} = params as any;
  const {index} = location.state as LocationAssetsState ?? {index: 0};

  const onOpenImage = () => {
    setOpenImage(true);
    setOpenImageURL(assets[id].url);
  };

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='image cursor-pointer' onClick={onOpenImage}>
              <img src={assets[id].url} alt='mamai' height={190} width={300} className='rounded'/>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                  {assets[id].title}
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
                    {assets[id].date}
                  </a>
                </div>
                <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    Riyadh, KSA
                  </a>
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
                      <div className='fs-2 fw-bolder'>160</div>
                    </div>
                    <div className='fw-bold fs-6 text-gray-400'>Views</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>10</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Downloads</div>
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
                  (location.pathname === `/apps/edit-assets/metadata/${id}` && 'active')
                }
                to={`/apps/edit-assets/metadata/${id}`}
              >
                {intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.METADATA'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/apps/edit-assets/activity/${id}` && 'active')
                }
                to={`/apps/edit-assets/activity/${id}`}
              >
                {intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACTIVITY'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/apps/edit-assets/access-control/${id}` && 'active')
                }
                to={`/apps/edit-assets/access-control/${id}`}
              >
                {intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACCESS_CONTROL'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/apps/edit-assets/settings/${id}` && 'active')
                }
                to={`/apps/edit-assets/settings/${id}`}
              >
                {intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.SETTINGS'})}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ImageModal onHide={() => setOpenImage(false)} show={openImage} imgURL={openImageURL} />
    </div>
  )
}

export {ProfileHeader}
