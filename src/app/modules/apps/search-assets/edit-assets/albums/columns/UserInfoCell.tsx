/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl, KTIcon} from '../../../../../../../_metronic/helpers'
import {Albums} from '../core/_models'

type Props = {
  user: Albums
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
    {/* begin:: Avatar */}
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
      <div className='symbol-label'>
            <KTIcon iconName='abstract-26' className='text-primary fs-1 me-5' />
          </div>
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {user.title}
      </a>
      <span>{user.files}</span>
    </div>
  </div>
)

export {UserInfoCell}
