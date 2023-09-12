import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from 'react-table';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { KTIcon } from '../../../_metronic/helpers'
// import { RootState } from "../../../../store";
// import { SnacksList } from "./items/SnacksList";
import { ImageModal } from "../../../_metronic/partials/modals/image-modal/ImageModal";
import { addToCart, removeFromCart, clearItemFromCart } from "../../store/cart/cart.slice";
import { selectCartAPIItems, selectCartItems, selectCartTotal, selectRecommendationItems } from "../../store/cart/cart.selector";
import { RecommendationList } from "./RecommendationList";
import { fetchRecommendationItems } from "../../store/actions/assetAction";
// import { QuantityCounter } from "./components/quantity-counter/QuantityCounter";

// import '../css/SnacksItems.css'

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);
  const recommendationItems: any = useSelector(selectRecommendationItems, shallowEqual);
  const apiItems = useSelector(selectCartAPIItems, shallowEqual);

  const [isGridView, setIsGridView] = useState(false);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [openImageURL, setOpenImageURL] = useState<string>('');
  const [recommendationList, setRecommendationList] = useState<any>(RecommendationList);


  const handleIncrement = useCallback((data: any) => {
    const updateData = { ...data, quantity: 1 };
    dispatch(addToCart({ cart: cartItems, product: updateData }));
  }, [cartItems, dispatch])

  const handleDecrement = useCallback((data: any) => {
    dispatch(removeFromCart({ cart: cartItems, product: data }));
  }, [dispatch, cartItems])

  const handleRecommendationIncrement = (itemIndex: number) => {
    setRecommendationList((prevSnacks: any) => {
      const updatedSnacks = [...prevSnacks];
      // Make a shallow copy of the snack object to ensure mutability
      updatedSnacks[itemIndex] = { ...updatedSnacks[itemIndex] };
      updatedSnacks[itemIndex].quantity += 1;
      return updatedSnacks;
    });
  }

  const handleRecommendationDecrement = (itemIndex: number) => {
    setRecommendationList((prevSnacks: any) => {
      const updatedSnacks = [...prevSnacks];
      if (updatedSnacks[itemIndex]?.quantity > 1) {
        updatedSnacks[itemIndex].quantity -= 1;
      }
      return updatedSnacks;
    });
  }

  const onRecommendationAddToCart = useCallback((data: any) => {
    dispatch(addToCart({ cart: cartItems, product: data }));
  }, [dispatch, cartItems]);

  const onRemoveFromCart = useCallback((data: any) => {
    // console.log('data', data);
    dispatch(clearItemFromCart({ cart: cartItems, product: data }));
  }, [cartItems, dispatch])

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
      accessor: "quantity",
      Cell: ({ ...props }) => {
        return (
          <QuantityCounter
            quantity={props.row.original.quantity}
            onAddQuantity={() => handleIncrement(props.row.original)}
            onRemoveQuantity={() => handleDecrement(props.row.original)} />
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-25px">Price</span>,
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
            onClick={() => onRemoveFromCart(props.row.original)}>
            <span className='btn-label'> Remove </span>
          </div>
        )
      }
    },
  ], [handleDecrement, handleIncrement, onRemoveFromCart]);

  const recommendationColumns = useMemo<any>(() => [
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
      Header: () => <span className="p-0 min-w-100px">Category</span>,
      accessor: "category",
      Cell: ({ ...props }) => {
        return (
          <span className='text-muted fw-semibold'>{props.value}</span>
        )
      }
    },
    {
      Header: () => <span className="p-0 min-w-100px">Quantity</span>,
      accessor: "quantity",
      Cell: ({ ...props }) => {
        const itemIndex = props.row.index;
        const initialQuantity = recommendationList[itemIndex]?.quantity ?? 1;

        return (
          <QuantityCounter
            quantity={initialQuantity}
            onAddQuantity={() => handleRecommendationIncrement(itemIndex)}
            onRemoveQuantity={() => handleRecommendationDecrement(itemIndex)} />
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
            onClick={() => onRecommendationAddToCart(props.row.original)}>
            <span className='btn-label'> Add to cart </span>
          </div>
        )
      }
    },
  ], [onRecommendationAddToCart, recommendationList]);

  const data = useMemo(() => cartItems, [cartItems]);

  const recommendationData = useMemo(() => recommendationList, [recommendationList]);

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

  const {
    getTableProps: getRecommendationTableProps,
    getTableBodyProps: getRecommendationTableBodyProps,
    headerGroups: headerRecommendationGroups,
    rows: recommendationRows,
    prepareRow: recommendationPrepareRow
  } = useTable(
    {
      columns: recommendationColumns,
      data: recommendationData,
    },
    useSortBy
  );

  useEffect(() => {
    const name = cartItems.map((item) => item?.NAME);
    dispatch(fetchRecommendationItems({cart: name}));
  }, [cartItems, dispatch]);

  useEffect(() => {
    const items = Object.values(apiItems);
    const recommend = [...recommendationItems];
    const result = recommend.map(itemName => {
      const matchingItem: any = items.find((item: any) => item.NAME === itemName.item);
      if (matchingItem) {
        return {...matchingItem, category: itemName.category};
      }
      return null;
    }).filter(item => item !== null);

    console.log('list', result);
    setRecommendationList(result);
  }, [recommendationItems, apiItems]);

  console.log('recommendation', recommendationItems)

  const onOpenImage = (url: any) => {
    setOpenImage(true);
    setOpenImageURL(url);
  }

  return (
    <>
      <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold text-dark'>Items in cart</span>
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
            {/* <KTIcon iconName='category' className='fs-2' /> */}
          </button>
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
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

        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <h1>Total: </h1>
          <h2 className="ms-7">{cartTotal} SAR</h2>
        </div>
      </div>
      {/* end::Body */}
    </div>
    <ImageModal onHide={() => setOpenImage(false)} show={openImage} imgURL={openImageURL} />
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold text-dark'>Would you like to complete your order with...</span>
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
            {/* <KTIcon iconName='category' className='fs-2' /> */}
          </button>
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-3'>
        <table className='table align-middle gs-0 gy-5' {...getRecommendationTableProps()}>
          <thead>
            {headerRecommendationGroups.map(headerGroup => (
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
          <tbody {...getRecommendationTableBodyProps()}>
            {recommendationRows.map(row => {
              recommendationPrepareRow(row);
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
      </div>
      {/* end::Body */}
    </div>
    </>
  )
}
interface Counter {
  quantity: number;
  onAddQuantity: () => void;
  onRemoveQuantity: () => void;
}

const QuantityCounter = ({ quantity, onAddQuantity, onRemoveQuantity }: Counter) => {

  return (
    <div>
      <div className="input-group justify-content-start align-items-center">
        <input type="button" value="-" className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" onClick={onRemoveQuantity} />
        <input type="number" step="1" max="10" value={quantity} name="quantity" className="quantity-field border-0 text-center w-25" />
        <input type="button" value="+" className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" onClick={onAddQuantity} />
      </div>
    </div>
  )
}

export { QuantityCounter }


export default CartPage;
