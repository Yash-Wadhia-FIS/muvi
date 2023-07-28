/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, useState } from 'react'
import { Modal } from 'react-bootstrap'

import { KTIcon } from '../../../../../_metronic/helpers'
import { data } from './image-item/ImageData';
import LazyImage from './image-item/LazyImage'

import '../css/CreateAlbums.css'
import '../css/EditAlbums.css'

type modal = {
    show: boolean,
    onHide: () => void,
    title: string,
}

const AddPhotosModal: React.FC<modal> = ({ show, onHide, title }) => {
    const [checkBoxes, setCheckBoxes] = useState({
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
    });

    const isAnyCheckBoxChecked = () => {
        return Object.values(checkBoxes).some((value) => value);
    };

    const handleCheckBoxChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setCheckBoxes({ ...checkBoxes, [name]: event.target.checked });
    };

    return (
        <Modal show={show} fullscreen={true}>
            <Modal.Header className='d-flex'>
                <Modal.Title>{title}</Modal.Title>
                <div className='float-right d-inline-flex align-items-center'>
                    {isAnyCheckBoxChecked() && (
                    <button className='btn btn-bg-primary btn-active-color-primary ms-3 me-5' style={{ 'marginRight': 7 }}>
                        <span className='text-white'>Upload</span>
                    </button>
                    )}
                    <button className='btn btn-bg-primary btn-active-color-primary ms-3 me-5' style={{ 'marginRight': 7 }}>
                        <span className='text-white'>Upload from system</span>
                    </button>
                    <span onClick={onHide}>
                        <KTIcon iconName='cross' className='fs-1 cursor-pointer' />
                    </span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="cont-main">
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-10" onChange={handleCheckBoxChange('checkbox10')} />
                        <label htmlFor="myCheckbox-10">
                            <LazyImage src={data[12].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-11" onChange={handleCheckBoxChange('checkbox11')} />
                        <label htmlFor="myCheckbox-11">
                            <LazyImage src={data[14].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-12" onChange={handleCheckBoxChange('checkbox12')} />
                        <label htmlFor="myCheckbox-12">
                            <LazyImage src={data[16].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export { AddPhotosModal }
