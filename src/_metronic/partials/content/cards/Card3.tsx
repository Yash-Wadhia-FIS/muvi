/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  color?: string
  avatar?: string
  online?: boolean
  name: string
  job: string
  avgEarnings?: string
  totalEarnings?: string
}

const Card3: FC<Props> = ({
  color = '',
  avatar = '',
  online = false,
  name,
  job,
  avgEarnings,
  totalEarnings,
}) => {
  return (
    <div className='card'>
      <div className='card-body d-flex flex-center flex-column p-9'>
        <div className='mb-5'>
          <div className='symbol symbol-75px symbol-circle'>
            {color ? (
              <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                {name.charAt(0)}
              </span>
            ) : (
              <img alt='Pic' src={toAbsoluteUrl(avatar)} />
            )}
          </div>
        </div>

        <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
          {name}
        </a>

        <div className='fw-bold text-gray-400 mb-6'>{job}</div>


        <a href='#' className='btn btn-sm btn-light'>
          Last updated: Today, 10:06 AM
        </a>
      </div>
    </div>
  )
}

export {Card3}
