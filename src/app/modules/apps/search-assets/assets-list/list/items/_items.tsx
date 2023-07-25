import React, {MouseEventHandler} from "react";

import { KTIcon } from "../../../../../../../_metronic/helpers";
import { toAbsoluteUrl } from "../../../../../../../_metronic/helpers";

type items = {
    title: string,
    url: string,
    size: string,
    status: string,
    index: number,
    date: string,
    metaData: Array<string>
};

const assetsItems = ({title, url, size, status, index, date, metaData}: items, onEdit: () => void) => {

    return (
        <tr key={index}>
            <td>
                <div className='symbol symbol-50px me-2'>
                    <div className='symbol-label' style={{ backgroundImage: `url(${url})` }}>
                    </div>
                </div>
            </td>
            <td>
                <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                    {title}
                </a>
                <span className='text-muted fw-semibold d-block fs-7'>Size: {size}</span>
            </td>
            <td className='text-start'>
                {metaData.map((meta) => (
                    <span className='badge badge-light-info fw-semibold me-1'>{meta}</span>
                ))}
            </td>
            <td className='text-start'>
                <span className='text-muted fw-semibold'>{date}</span>
            </td>
            <td className='text-end'>
                <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary' style={{ 'marginRight': 7 }} onClick={() => onEdit()}>
                    <KTIcon iconName='pencil' className='fs-2' />
                </button>
                <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary mr-4 mr-5'>
                    <KTIcon iconName='share' className='fs-2' />
                </button>
            </td>
        </tr>
    )
};

export { assetsItems };
