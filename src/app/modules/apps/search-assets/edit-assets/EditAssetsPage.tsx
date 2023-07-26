import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Activity} from './components/Activity'
import {AccessControl} from './components/AccessControl'
import {Metadata} from './components/Metadata'
import {Settings} from './components/Settings'
import {ProfileHeader} from './EditAssetsHeader'
import { useIntl } from 'react-intl'


const EditAssets = () => {
  const intl = useIntl();

  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: intl.formatMessage({id: 'MENU.ASSETS'}),
      path: 'activity',
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
              <PageTitle breadcrumbs={profileBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACTIVITY'})}</PageTitle>
              <Activity />
            </>
          }
        />
        <Route
          path='access-control/:id'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.ACCESS_CONTROL'})}</PageTitle>
              <AccessControl />
            </>
          }
        />
        <Route
          path='metadata/:id'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.METADATA'})}</PageTitle>
              <Metadata />
            </>
          }
        />
        <Route
          path='settings/:id'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>{intl.formatMessage({id: 'ASSETS.EDIT_ASSETS.SETTINGS'})}</PageTitle>
              <Settings />
            </>
          }
        />
        <Route index element={<Navigate to='activity' />} />
      </Route>
    </Routes>
  )
}

export default EditAssets
