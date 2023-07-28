/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router'
import MyAlbumsTable from '../components/MyAlbumsTable';

import {KTCard} from '../../../../../_metronic/helpers'
import { MyAlbumHeader } from './MyAlbumHeader';


const MyAlbums: React.FC = () => {
    const navigate = useNavigate();

    const onAlbumSelected = () => {
        navigate('/apps/albums/edit-album');
    }
  return (
    <KTCard>
        <MyAlbumHeader />
        <MyAlbumsTable />
    </KTCard>
  )
}

export {MyAlbums}
