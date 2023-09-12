import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { SnacksListWrapper } from './list/SnacksList'
import { useIntl } from 'react-intl'

const SnacksPage = () => {
  const intl = useIntl();

  const usersBreadcrumbs: Array<PageLink> = [
    {
      title: intl.formatMessage({id: 'MENU.MOVIES.SNACKS'}),
      path: '/apps/snacks/snacks-list',
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
          path='snacks-list'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({id: 'MENU.MOVIES.SNACKS'})}</PageTitle>
              <SnacksListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/snacks/snacks-list' />} />
    </Routes>
  )
}

export default SnacksPage;
