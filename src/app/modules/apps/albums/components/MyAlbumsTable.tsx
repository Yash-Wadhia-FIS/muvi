import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, shallowEqual} from 'react-redux';

import { KTIcon } from '../../../../../_metronic/helpers'
import { RootState } from "../../../../store";
import { albumItems } from "../items/_items";
import { AlbumList } from "../items/AlbumList";

import '../css/AlbumItems.css'

const itemsPerPage = 7;

const MyAlbumsTable = () => {
  const navigate = useNavigate();

//   const assets = useSelector((state: RootState) => state.assets.assets, shallowEqual);

  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);

  const totalPages = Math.ceil(AlbumList?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = AlbumList?.slice(startIndex, startIndex + itemsPerPage);


  const renderAssetsItems = () => {
    const onEdit = (data: any): void => {
        navigate(`/apps/albums/edit-album/${data?.index}`);
    }

    return (
      <>
        {currentItems.map((data: any) =>
          albumItems(data, () => onEdit(data)))}
      </>
    )
  }

  const onAlbumSelected = (data: any): void => {
    navigate(`/apps/albums/edit-album/${data?.index}`);
}

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold text-dark'>Recent Search Albums</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
            onClick={() => setIsGridView(!isGridView)}
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      {isGridView ?
        <div className="container mt-4">
          <div className="row">
            {AlbumList.map((data, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className='symbol symbol-160px symbol-2by3 me-4 d-flex justify-content-center'>
                  <div
                    className='symbol-label'
                    style={{ backgroundImage: `url(${data.url})` }}
                  ></div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button className="btn btn-primary me-2" onClick={() => onAlbumSelected(data)}>Edit</button>
                    <button className="btn btn-secondary">Share</button>
                </div>
              </div>
            ))}
          </div>
        </div> :
        <div className='card-body pt-3'>
          <table className='table align-middle gs-0 gy-5'>
            <thead>
              <tr>
                <th className='p-0 w-50px'></th>
                <th className='p-0 min-w-100px'></th>
                <th className='p-0 min-w-100px'></th>
                <th className='p-0 min-w-125px'></th>
                <th className='p-0 min-w-40px'></th>
              </tr>
            </thead>
            <tbody>
              {renderAssetsItems()}
            </tbody>
          </table>

          <div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>}
      {/* end::Body */}
    </div>
  )
}

export default MyAlbumsTable;
