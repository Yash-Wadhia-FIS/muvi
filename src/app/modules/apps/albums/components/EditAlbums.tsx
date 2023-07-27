/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Overlay, Popover} from 'react-bootstrap'

import LazyImage from './image-item/LazyImage'
import {data} from './image-item/ImageData';

import { KTIcon } from '../../../../../_metronic/helpers'

import '../css/EditAlbums.css'


const EditAlbums: React.FC = () => {
    return (
        <div className="cont-bg">
            <div className="cont-main">
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-1" />
                    <label htmlFor="myCheckbox-1">
                        <LazyImage src={data[0].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-2" />
                    <label htmlFor="myCheckbox-2">
                        <LazyImage src={data[1].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-3" />
                    <label htmlFor="myCheckbox-3">
                        <LazyImage src={data[2].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-4" />
                    <label htmlFor="myCheckbox-4">
                        <LazyImage src={data[3].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-5" />
                    <label htmlFor="myCheckbox-5">
                        <LazyImage src={data[4].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
                <div className="cont-checkbox">
                    <input type="checkbox" id="myCheckbox-6" />
                    <label htmlFor="myCheckbox-6">
                        <LazyImage src={data[5].src}/>
                        <span className="cover-checkbox">
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export { EditAlbums }
