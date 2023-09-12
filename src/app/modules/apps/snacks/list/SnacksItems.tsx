import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from 'react-table';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { KTIcon } from '../../../../../_metronic/helpers'
// import { RootState } from "../../../../store";
import { SnacksList } from "./items/SnacksList";
import { ImageModal } from "../../../../../_metronic/partials/modals/image-modal/ImageModal";
import { addToCart } from "../../../../store/cart/cart.slice";
import { selectCartAPIItems, selectCartItems } from "../../../../store/cart/cart.selector";
import { QuantityCounter } from "./components/quantity-counter/QuantityCounter";
import {fetchBucketItems} from "../../../../store/actions/assetAction";

import '../css/SnacksItems.css'

const AssetsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const apiItems = useSelector(selectCartAPIItems, shallowEqual);

  const [isGridView, setIsGridView] = useState(false);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [openImageURL, setOpenImageURL] = useState<string>('');
  const [snackList, setSnackList] = useState<any>(Object.values(apiItems));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    dispatch(fetchBucketItems())
  }, [dispatch]);

  const onAddToCart = useCallback((data: any) => {
    dispatch(addToCart({cart: cartItems, product: data}));
  }, [cartItems, dispatch]);

  const columns = useMemo<any>(() => [
    {
      Header: () => <span className="p-0 min-w-50px"></span>,
      accessor: "IMAGE_PATH",
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
      Header: () => <span className="p-0 min-w-100px">Snacks</span>,
      accessor: "NAME",
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
      Header: () => <span className="p-0 min-w-100px">Quantity</span>,
      accessor: "metaData",
      Cell: ({ ...props }) => {
        const itemIndex = props.row.index;
        const initialQuantity = snackList[itemIndex]?.quantity ?? 1;

        return (
          <QuantityCounter 
          quantity={initialQuantity} 
          onAddQuantity={() => handleIncrement(itemIndex)} 
          onRemoveQuantity={() => handleDecrement(itemIndex)} />
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-125px">Price</span>,
      accessor: "PRICE",
      Cell: ({ ...props }) => {
        return (
          <span className='text-muted fw-semibold'>{props.value} SAR</span>
        )
      }
    },
    {
      Header: () => (
        <div className="text-end">
          <span className="p-0 min-w-40px text-end"></span>
        </div>
      ),
      accessor: "actions",
      Cell: ({ ...props }) => {
        return (
          <div className="text-end btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" 
          onClick={() => onAddToCart(props.row.original)}>
            <span className='btn-label'> Add to cart </span>
          </div>
        )
      }
    },
  ], [onAddToCart, snackList]);

  const data = useMemo(() => {
    // Filter the data based on the search term
    return snackList.filter((item: any) =>
      item.NAME.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [snackList, searchTerm]);

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

  const onGridEdit = (data: any): void => {
    navigate(`/apps/edit-assets/activity/${data?.index}`)
  }

  const onGridOpenImage = (data: any) => {
    setOpenImage(true);
    setOpenImageURL(data?.url);
  }

  const handleIncrement = (itemIndex: number) => {
    setSnackList((prevSnacks: any) => {
      const updatedSnacks = [...prevSnacks];
      // Make a shallow copy of the snack object to ensure mutability
      updatedSnacks[itemIndex] = { ...updatedSnacks[itemIndex] };
      updatedSnacks[itemIndex].quantity += 1;
      return updatedSnacks;
    });
  };

  const handleDecrement = (itemIndex: number) => {
    setSnackList((prevSnacks: any) => {
      const updatedSnacks = [...prevSnacks];
      if (updatedSnacks[itemIndex]?.quantity > 1) {
        updatedSnacks[itemIndex].quantity -= 1;
      }
      return updatedSnacks;
    });
  };

  const handleSearchChange = (event: any) => {
    const query = event.target.value;
    setSearchTerm(query);
  };

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className={`card`}>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-gray-300 align-middle gs-0'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                </th>
                <th className='min-w-150px'></th>
                <th className='min-w-140px'></th>
                <th className='min-w-120px'></th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    {/* <input className='form-check-input widget-9-check' type='checkbox' value='1' /> */}
                  </div>
                </td>
                <td>
                  <div className='d-inline-flex align-items-center'>
                    <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                    <input
                      type='text'
                      data-kt-user-table-filter='search'
                      className='form-control form-control-solid w-250px ps-14'
                      placeholder='Search snacks'
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </td>
                <td>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <button
                      // disabled={isLoading}
                      type='button'
                      className='btn btn-primary me-3'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                    >
                      Search
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold text-dark'>Recent Search Items</span>
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
            {SnacksList.map((data, index) => (
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


