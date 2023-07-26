/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Card5} from '../../../../../../_metronic/partials/content/cards/Card5'

export function Metadata() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Metadata
        </h3>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-sm-6 col-xl-4'>
          <Card5
            icons='pencil'
            title='Activity Metadata'
            description='$500.00'
            status='down'
            statusValue={40.5}
            statusDesc='more impressions'
            progress={0.5}
            progressType='MRR'
            options={[{label: 'Golf', value: 'Golf'}, {label: 'Awards', value: 'Awards'}]}
          />
        </div>
        <div className='col-sm-6 col-xl-4'>
          <Card5
            icons='user'
            title='People Metadata'
            description='807k'
            status='up'
            statusValue={17.62}
            statusDesc='Followers growth'
            progress={5}
            progressType='New trials'
            options={[{label: 'Amin H. Nassar', value: 'Amin H. Nassar'}, {label: ' Emily Kristine Pedersen', value: ' Emily Kristine Pedersen'}]}
          />
        </div>
        <div className='col-sm-6 col-xl-4'>
          <Card5
            icons='geolocation'
            title='Location Metadata'
            description='1,073'
            status='down'
            statusValue={10.45}
            statusDesc='Less comments than usual'
            progress={40}
            progressType='Impressions'
            options={[{label: 'Riyadh', value: 'Riyadh'}, {label: 'Saudi Arabia', value: 'Saudi Arabia'}]}
          />
        </div>
      </div>
    </>
  )
}
