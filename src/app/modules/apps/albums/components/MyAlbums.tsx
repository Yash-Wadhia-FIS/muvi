/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import MyAlbumsTable from '../components/MyAlbumsTable';

import {KTCard} from '../../../../../_metronic/helpers'
import { MyAlbumHeader } from './MyAlbumHeader';


const MyAlbums: React.FC = () => {
    
  return (
    <KTCard>
        <MyAlbumHeader />
        <MyAlbumsTable />
    </KTCard>
  )
}

export {MyAlbums}
