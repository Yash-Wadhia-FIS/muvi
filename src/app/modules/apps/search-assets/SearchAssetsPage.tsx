import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { AssetsListWrapper } from './assets-list/AssetsList'
import EditAssets from './edit-assets/EditAssetsPage'
import { useIntl } from 'react-intl'

const SearchAssetsPage = () => {
  const intl = useIntl();

  const usersBreadcrumbs: Array<PageLink> = [
    {
      title: intl.formatMessage({id: 'MENU.ASSETS'}),
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

  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='assets'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({id: 'MENU.SEARCH_ASSETS'})}</PageTitle>
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
