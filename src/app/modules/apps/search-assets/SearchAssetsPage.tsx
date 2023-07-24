import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { AssetsListWrapper } from './assets-list/AssetsList'
import EditAssets from './edit-assets/EditAssetsPage'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Assets',
    path: '/apps/search-assets',
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

const SearchAssetsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='assets'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Search assets</PageTitle>
              <AssetsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/search-assets/assets' />} />
    </Routes>
  )
}

export default SearchAssetsPage;
