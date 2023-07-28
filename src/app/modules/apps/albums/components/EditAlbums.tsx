/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, useState } from 'react'
import { Overlay, Popover } from 'react-bootstrap'

import LazyImage from './image-item/LazyImage'
import { data } from './image-item/ImageData';

import { KTCard } from '../../../../../_metronic/helpers'

import '../css/EditAlbums.css'
import { EditAlbumHeader } from './EditAlbumHeader';


const EditAlbums: React.FC = () => {
    const [checkBoxes, setCheckBoxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
      });

    const isAnyCheckBoxChecked = () => {
        return Object.values(checkBoxes).some((value) => value);
    };

    const handleCheckBoxChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setCheckBoxes({ ...checkBoxes, [name]: event.target.checked });
      };

    return (
        <KTCard>
            {isAnyCheckBoxChecked() && <EditAlbumHeader />}
            <div className="cont-bg" style={{height: '80vh', overflow: 'auto'}}>
                <div className="cont-main">
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-1" onChange={handleCheckBoxChange('checkbox1')} />
                        <label htmlFor="myCheckbox-1">
                            <LazyImage src={data[0].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-2" onChange={handleCheckBoxChange('checkbox2')} />
                        <label htmlFor="myCheckbox-2">
                            <LazyImage src={data[1].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-3" onChange={handleCheckBoxChange('checkbox3')} />
                        <label htmlFor="myCheckbox-3">
                            <LazyImage src={data[2].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-4" onChange={handleCheckBoxChange('checkbox4')}/>
                        <label htmlFor="myCheckbox-4">
                            <LazyImage src={data[3].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-5" onChange={handleCheckBoxChange('checkbox5')}/>
                        <label htmlFor="myCheckbox-5">
                            <LazyImage src={data[4].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-6" onChange={handleCheckBoxChange('checkbox6')}/>
                        <label htmlFor="myCheckbox-6">
                            <LazyImage src={data[5].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-7" onChange={handleCheckBoxChange('checkbox7')} />
                        <label htmlFor="myCheckbox-7">
                            <LazyImage src={data[6].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-8" onChange={handleCheckBoxChange('checkbox8')}/>
                        <label htmlFor="myCheckbox-8">
                            <LazyImage src={data[7].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                    <div className="cont-checkbox">
                        <input type="checkbox" id="myCheckbox-9" onChange={handleCheckBoxChange('checkbox9')}/>
                        <label htmlFor="myCheckbox-9">
                            <LazyImage src={data[8].src} />
                            <span className="cover-checkbox" />
                        </label>
                    </div>
                </div>
            </div>
        </KTCard>
    )
}

export { EditAlbums }
