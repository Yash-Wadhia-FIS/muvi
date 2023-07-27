import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux';
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {AuthInit} from './modules/auth'
import customStore from './store';

const App = () => {
  return (
    <Provider store={customStore}>
      <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
    </Provider>
  )
}

export {App}
