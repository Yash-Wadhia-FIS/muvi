import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {Activity} from './components/Activity'
import {AccessControl} from './components/AccessControl'
import {Metadata} from './components/Metadata'
import {Settings} from './components/Settings'
import {ProfileHeader} from './EditAssetsHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Assets',
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

const EditAssets = () => (
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
            <PageTitle breadcrumbs={profileBreadCrumbs}>Activity</PageTitle>
            <Activity />
          </>
        }
      />
      <Route
        path='access-control/:id'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Access control</PageTitle>
            <AccessControl />
          </>
        }
      />
      <Route
        path='metadata/:id'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Metadata</PageTitle>
            <Metadata />
          </>
        }
      />
      <Route
        path='settings/:id'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Settings</PageTitle>
            <Settings />
          </>
        }
      />
      <Route index element={<Navigate to='activity' />} />
    </Route>
  </Routes>
)

export default EditAssets
