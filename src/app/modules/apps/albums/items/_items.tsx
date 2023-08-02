import React, {MouseEventHandler} from "react";

import { KTIcon } from "../../../../../_metronic/helpers";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";

type items = {
    title: string,
    url: string,
    files: string,
    status: string,
    index: number,
    date: string,
    metaData: Array<string>
};

const albumItems = ({title, url, files, status, index, date, metaData}: items, onEdit: () => void) => {

    return (
        <tr key={index}>
            <td>
                <div className='symbol symbol-50px me-2'>
                    <KTIcon iconName='abstract-26' className='text-primary fs-1 me-5' />
                </div>
            </td>
            <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    {title}
                </a>
                <span className='text-muted fw-semibold d-block fs-7'>Updated: {date}</span>
            </td>
            <td className='text-start'>
                
            </td>
            <td className='text-start'>
                <span className='text-muted fw-semibold'>Files: {files}</span>
            </td>
            <td className='text-end'>
                <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary' style={{ 'marginRight': 7 }} onClick={() => onEdit()}>
                    <KTIcon iconName='pencil' className='fs-2' />
                </button>
                <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary mr-4 mr-5' style={{ 'marginRight': 7 }}>
                    <KTIcon iconName='cloud-download' className='fs-2' />
                </button>
                <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary mr-4 mr-5'>
                    <KTIcon iconName='share' className='fs-2' />
                </button>
            </td>
        </tr>
    )
};

export { albumItems };
