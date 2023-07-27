/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { Col, Form } from "react-bootstrap";
import Select from 'react-select';
import { TagsInput } from 'react-tag-input-component';


import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { Dropdown1 } from '../dropdown/Dropdown1'

type Props = {
  image?: string
  title: string
  description: string
  status: 'up' | 'down'
  statusValue: number
  statusDesc: string
  progress: number
  progressType: string,
  icons?: string,
  options: any,
  onOptionsSelected?: (otpions: string []) => void
}

const Card5: FC<Props> = ({
  image,
  icons = '',
  title,
  description,
  status,
  statusValue,
  statusDesc,
  progress,
  progressType,
  options,
  onOptionsSelected = () => {},
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    onOptionsSelected(selectedOptions);
  }, [selectedOptions, onOptionsSelected]);

  return (
    <div className='card h-100'>
      <div className='card-header flex-nowrap border-0 pt-9'>
        <div className='card-title m-0'>
          <div className='symbol symbol-45px w-45px me-5 d-flex justify-center'>
            <KTIcon iconName={icons} className='fs-3 text-primary' />
          </div>

          <a href='#' className='fs-4 fw-bold text-hover-primary text-gray-600 m-0'>
            {title}
          </a>
        </div>

        <div className='card-toolbar m-0'>
          <button
            type='button'
            className='btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-3 text-primary' />
          </button>

          <Dropdown1 />
        </div>
      </div>

      <div className='card-body d-flex flex-column px-9 pt-6 pb-8'>
      <div className="row">
          <TagsInput
            value={selectedOptions}
            onChange={setSelectedOptions}
          />
      </div>
      </div>
    </div>
  )
}

export { Card5 }
