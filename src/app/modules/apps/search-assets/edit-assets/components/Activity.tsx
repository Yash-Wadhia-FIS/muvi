import React from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
  ChartsWidget1,
  ListsWidget5,
  ListsWidget2,
} from '../../../../../../_metronic/partials/widgets'

export function Activity() {
  return (
    <div className='row g-5 g-xxl-8'>
      <div className='col-xl-6'>

        <ListsWidget5 className='mb-5 mb-xxl-8' />

        <FeedsWidget3 className='mb-5 mb-xxl-8' />
      </div>

      <div className='col-xl-6'>

        <ListsWidget2 className='mb-5 mb-xxl-8' />

        <FeedsWidget4 className='mb-5 mb-xxl-8' />
      </div>
    </div>
  )
}
