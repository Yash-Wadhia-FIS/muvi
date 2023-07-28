/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router';

import LazyImage from './image-item/LazyImage'
import { data } from './image-item/ImageData';

import { KTCard } from '../../../../../_metronic/helpers'
import { KTIcon } from '../../../../../_metronic/helpers'
import { EditAlbumHeader } from './EditAlbumHeader';
import { AlbumList } from "../items/AlbumList";

import '../css/CreateAlbums.css'


const CreateAlbums: React.FC = () => {

    return (
        <KTCard>
            <div style={{height: '80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
                <KTIcon iconName='abstract-46' className='create-album-logo'/>
                <button className='btn btn-bg-primary btn-active-color-primary ms-3'>
                    <span className='text-white'>Create an album</span>
                </button>
                <span className='mt-3'>Magic button to create an album</span>
            </div>
        </KTCard>
    )
}

export { CreateAlbums }
