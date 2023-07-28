/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
const EditAlbumHeader = () => {

    return (
        <div className='card-header border-0 d-flex align-items-center position-relative my-1 flex-row-reverse' style={{backgroundColor: '#1e1e2d'}}>
            <div className='card-title'>
                {/* begin::Search */}
                <div className='d-flex flex-row'>
                    <div className=''>
                        <button
                            // disabled={isLoading}
                            type='button'
                            className='btn btn-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                        >
                            Download
                        </button>
                        <button
                            // disabled={isLoading}
                            type='button'
                            className='btn btn-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                        >
                            Delete
                        </button>
                    </div>
                </div>
                {/* end::Search */}
            </div>
        </div>
    )
}

export { EditAlbumHeader }
