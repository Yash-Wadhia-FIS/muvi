import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import {AssetsHeader} from './UploadAssetsHeader';
import { UploadMetadata } from './components/UploadMetadata';
import { UploadSettings } from './components/UploadSettings';

const UploadAssetsPage = () => {
    const intl = useIntl();

    const usersBreadcrumbs: Array<PageLink> = [
        {
            title: intl.formatMessage({ id: 'MENU.ASSETS' }),
            path: 'upload-meta-data',
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
        <Routes><Route
            element={
                <>
                    <AssetsHeader />
                    <Outlet />
                </>
            }
        >
            <Route
                path='upload-meta-data'
                element={
                    <>
                        <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({ id: 'MENU.UPLOAD_ASSETS' })}</PageTitle>
                        <UploadMetadata />
                    </>
                }
            />
            <Route
                path='upload-settings'
                element={
                    <>
                        <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({ id: 'MENU.UPLOAD_ASSETS' })}</PageTitle>
                        <UploadSettings />
                    </>
                }
            />
        </Route>
            <Route index element={<Navigate to='upload-meta-data' />} />
        </Routes>
    )
}

export default UploadAssetsPage;
