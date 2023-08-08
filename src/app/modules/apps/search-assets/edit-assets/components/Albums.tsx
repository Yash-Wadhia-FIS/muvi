/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useMemo } from 'react'
import { useTable, useSortBy, Column } from 'react-table';

import { KTIcon } from '../../../../../../_metronic/helpers'
import { AlbumList } from '../../../albums/items/AlbumList'

export function Albums() {
  const columns = useMemo<any>(
    () => [
      {
        Header: "Album name",
        accessor: "title",
        Cell: ({...props}) => {
          return(
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-45px me-5'>
              <KTIcon iconName='abstract-26' className='text-primary fs-1 me-5' />
            </div>
            <div className='d-flex justify-content-start flex-column'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
              {props.value}
              </a>
            </div>
          </div>
        )}
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({...props}) => {
          return(
            <span className='text-muted fw-semibold text-muted d-block fs-7'>
            {props.value}
          </span>
        )}
      },
      {
        Header: "Actions",
        id: 'actions',
        Cell: () => (
          <div className='d-flex justify-content-end flex-shrink-0'>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
            >
              <KTIcon iconName='switch' className='fs-3' />
            </a>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
            >
              <KTIcon iconName='pencil' className='fs-3' />
            </a>
            <a
              href='#'
              className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
            >
              <KTIcon iconName='trash' className='fs-3' />
            </a>
          </div>
        ),
      }
    ],
    []
  );

  const data = useMemo(() => AlbumList, []);
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

  const [isUploadEnabled, setUploadEnabled] = useState(false);

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('.widget-9-check');
    let checked = false;

    checkboxes.forEach((checkbox: any) => {
      if (checkbox.checked) {
        checked = true;
      }
    });

    setUploadEnabled(checked);
  };

  const getHeaderClass = (header: string) => {
    switch (header) {
      case "Album name":
        return "min-w-150px";
      case "Date":
        return "min-w-140px";
      case "Actions":
        return "min-w-100px text-end";
    }
  }
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Albums
        </h3>
      </div>
      <div className={`card`}>
        {/* begin::Header */}

        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            <table {...getTableProps()} className="table">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => {
                      return (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className={getHeaderClass(column.Header)}>
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
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
    </>
  )
}
