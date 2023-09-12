/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, ChangeEvent } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useIntl } from 'react-intl';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { onAddAssets } from '../../../store/slices/assetSlice';
// import { RootState } from '../../../store';

const AssetsHeader: React.FC = () => {
  const location = useLocation();
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const metadata = useSelector((state: RootState) => state.assets.metadata, shallowEqual);

  const [uploadImage, setUploadImage] = useState<string>('https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png');
  const [eventName, setEventName] = useState<string>('');
  const [eventLocation, setEventLocation] = useState<string>('');

  const onUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setUploadImage(URL.createObjectURL(file))
    };
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <label htmlFor='upload-image' className='h-190px w-300px cursor-pointer'>
                <img src={uploadImage} alt='upload' height={190} width={300} className='rounded' />
              </label>
              <input id='upload-image' className='d-none' type={'file'} accept="image/*" onChange={onUploadImage} />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <div className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid w-300px'
                      placeholder='Event name'
                      value={eventName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setEventName(e.target.value)}
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center mb-2 mt-5'>
                  <div className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid w-300px'
                      placeholder='Location'
                      value={eventLocation}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setEventLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex my-4'>
            <div className='me-0'>
              <button
                className='btn btn-primary'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/apps/assets/upload-assets/upload-meta-data` && 'active')
                }
                to={`/apps/assets/upload-assets/upload-meta-data`}
              >
                {intl.formatMessage({ id: 'ASSETS.EDIT_ASSETS.METADATA' })}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === `/apps/assets/upload-assets/upload-settings` && 'active')
                }
                to={`/apps/assets/upload-assets/upload-settings`}
              >
                {intl.formatMessage({ id: 'ASSETS.EDIT_ASSETS.SETTINGS' })}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { AssetsHeader }
