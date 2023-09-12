import React, { MouseEventHandler, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from 'react-redux';
import { useTable, useSortBy, Column } from 'react-table';

import { KTIcon } from '../../../../../../_metronic/helpers'
import { assetsItems } from "./items/_items";
import { AssetsList } from "./items/AssetsList";
import { ImageModal } from "../../../../../../_metronic/partials/modals/image-modal/ImageModal";

import '../../css/AssetsItems.css'

const itemsPerPage = 7;

const AssetsTable = () => {
  const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [openImageURL, setOpenImageURL] = useState<string>('');


  const columns = useMemo<any>(() => [
    {
      Header: <span className="p-0 min-w-50px"></span>,
      accessor: "url",
      Cell: ({ ...props }) => {
        return (
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-50px me-2 cursor-pointer' onClick={() => onOpenImage(props.value)}>
              <div className='symbol-label image' style={{ backgroundImage: `url(${props.value})` }}>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-100px">Album name</span>,
      accessor: "title",
      Cell: ({ ...props }) => {
        return (
          <div className='d-flex align-items-center'>
            <div className='d-flex justify-content-start flex-column'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                {props.value}
              </a>
            </div>
          </div>
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-100px">Metadata</span>,
      accessor: "metaData",
      Cell: ({ ...props }) => {
        return (
          <>
            {props.value?.map((meta: string) => (
              <span className='badge badge-light-info fw-semibold me-1'>{meta}</span>
            ))}
          </>
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-125px">Last updated</span>,
      accessor: "date",
      Cell: ({ ...props }) => {
        return (
          <span className='text-muted fw-semibold'>{props.value}</span>
        )
      }
    },
    {
      Header: () => (
        <div className="text-end">
          <span className="p-0 min-w-40px text-end">Actions</span>
        </div>
      ),
      accessor: "actions",
      Cell: ({ ...props }) => {
        return (
          <div className="text-end">
            <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary' style={{ 'marginRight': 7 }} onClick={() => onEdit(props.row.id)}>
              <KTIcon iconName='pencil' className='fs-2' />
            </button>
            <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary mr-4 mr-5' style={{ 'marginRight': 7 }}>
              <KTIcon iconName='cloud-download' className='fs-2' />
            </button>
            <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary mr-4 mr-5'>
              <KTIcon iconName='share' className='fs-2' />
            </button>
          </div>
        )
      }
    },
  ], []);

  const data = useMemo(() => AssetsList, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const onOpenImage = (url: any) => {
    setOpenImage(true);
    setOpenImageURL(url);
  }


  const onEdit = (index: any): void => {
    navigate(`/apps/edit-assets/activity/${index}`)
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
          <table className='table align-middle gs-0 gy-5' {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => {
                      return (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          <span>
                            {column.isSorted ? (column.isSortedDesc ? <KTIcon iconName="down" className="ml-2" /> : <KTIcon iconName="up" className="ml-2" />) : ''}
                          </span>
                        </th>
                      )
                    })}
                  </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                
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
