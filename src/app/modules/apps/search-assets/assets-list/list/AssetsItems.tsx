import React, { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from 'react-redux';

import { KTIcon } from '../../../../../../_metronic/helpers'
import { RootState } from "../../../../../store";
import { assetsItems } from "./items/_items";
import { AssetsList } from "./items/AssetsList";

import '../../css/AssetsItems.css'
import { ImageModal } from "../../../../../../_metronic/partials/modals/image-modal/ImageModal";

const itemsPerPage = 7;

const AssetsTable = () => {
  const navigate = useNavigate();

  const assets = useSelector((state: RootState) => state.assets.assets, shallowEqual);

  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [openImageURL, setOpenImageURL] = useState<string>('');

  const totalPages = Math.ceil(assets?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = assets?.slice(startIndex, startIndex + itemsPerPage);


  const renderAssetsItems = () => {
    const onEdit = (data: any): void => {
      navigate(`/apps/edit-assets/activity/${data?.index}`)
    }

    const onOpenImage = (data: any) => {
      setOpenImage(true);
      setOpenImageURL(data?.url);
    }

    return (
      <>
        {currentItems.map((data: any) =>
          assetsItems(data, () => onEdit(data), () => onOpenImage(data)))}
      </>
    )
  }

  const onGridEdit = (data: any): void => {
    navigate(`/apps/edit-assets/activity/${data?.index}`)
  }

  const onGridOpenImage = (data: any) => {
    setOpenImage(true);
    setOpenImageURL(data?.url);
  }

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold text-dark'>Recent Search Media</span>
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
            {AssetsList.map((data, index) => (
              <div className="col-lg-4">
                <div className="card" onClick={() => onGridOpenImage(data)}>
                  <img
                    src={`${data.url}`}
                    className="card-img-top image cursor-pointer"
                    alt="Waterfall"
                    height={270}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    {/* <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk
                      of the card's content.
                    </p> */}
                    {data.metaData.map((meta) => (
                      <span className='badge badge-light-info fw-semibold me-1'>{meta}</span>
                    ))}
                    <div className="d-flex justify-content-center mt-3 mb-5">
                      <button className="btn btn-primary me-2" onClick={() => onGridEdit(data)}>Edit</button>
                      <button className="btn btn-primary me-2">Download</button>
                      <button className="btn btn-secondary me-2">Share</button>
                    </div>
                  </div>
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
      <ImageModal onHide={() => setOpenImage(false)} show={openImage} imgURL={openImageURL} />
    </div>
  )
}

export default AssetsTable;
