import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'
import { MyAlbums } from './components/MyAlbums';
import { EditAlbums } from './components/EditAlbums';
// import {AssetsHeader} from './UploadAssetsHeader';
// import { UploadMetadata } from './components/UploadMetadata';
// import { UploadSettings } from './components/UploadSettings';

const UploadAssetsPage = () => {
    const intl = useIntl();

    const usersBreadcrumbs: Array<PageLink> = [
        {
            title: intl.formatMessage({ id: 'ALBUMS.GENERAL.ALBUMS' }),
            path: 'my-album',
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
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='my-album'
                    element={
                        <>
                            <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({ id: 'ALBUMS.GENERAL.MY_ALBUMS' })}</PageTitle>
                            <MyAlbums />
                        </>
                    }
                />
                <Route
                    path='create-album'
                    element={
                        <>
                            <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({ id: 'ALBUMS.GENERAL.CREATE_ALBUMS' })}</PageTitle>
                            {/* <UploadSettings /> */}
                        </>
                    }
                />
                <Route
                    path='edit-album/:id'
                    element={
                        <>
                            <PageTitle breadcrumbs={usersBreadcrumbs}>{intl.formatMessage({ id: 'ALBUMS.GENERAL.EDIT_ALBUMS' })}</PageTitle>
                            <EditAlbums />
                        </>
                    }
                />
            </Route>
            <Route index element={<Navigate to='my-album' />} />
        </Routes>
    )
}

export default UploadAssetsPage;
