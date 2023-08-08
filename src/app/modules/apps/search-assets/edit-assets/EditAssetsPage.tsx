import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import { useIntl } from 'react-intl'

import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Activity} from './components/Activity'
import {AccessControl} from './components/AccessControl'
import {Metadata} from './components/Metadata'
import {Settings} from './components/Settings'
import { Albums } from './components/Albums'
import {ProfileHeader} from './EditAssetsHeader'
import { AlbumsTable } from './albums/AlbumsTable'


const EditAssets = () => {
  const intl = useIntl();

  const editAssetsBreadCrumbs: Array<PageLink> = [
    {
      title: intl.formatMessage({id: 'MENU.ASSETS'}),
      path: '/apps/assets/search-assets/assets',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]
  

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='activity/:id'
          element={
            <>
              <PageTitle breadcrumbs={editAssetsBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACTIVITY'})}</PageTitle>
              <Activity />
            </>
          }
        />
        <Route
          path='access-control/:id'
          element={
            <>
              <PageTitle breadcrumbs={editAssetsBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACCESS_CONTROL'})}</PageTitle>
              <AccessControl />
            </>
          }
        />
        <Route
          path='metadata/:id'
          element={
            <>
              <PageTitle breadcrumbs={editAssetsBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.METADATA'})}</PageTitle>
              <Metadata />
            </>
          }
        />
        <Route
          path='settings/:id'
          element={
            <>
              <PageTitle breadcrumbs={editAssetsBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.SETTINGS'})}</PageTitle>
              <Settings />
            </>
          }
        />
        <Route
          path='albums/:id'
          element={
            <>
              <PageTitle breadcrumbs={editAssetsBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ALBUMS'})}</PageTitle>
              <Albums />
            </>
          }
        />
        <Route index element={<Navigate to='activity' />} />
      </Route>
    </Routes>
  )
}

export default EditAssets
