/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTIcon } from '../../../../helpers'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/* <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' /> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='element-plus'
      >
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      {/* <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</span>
        </div>
      </div>
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.DASHBOARD.OVERVIEW' })} icon='chart-pie-4' />
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.DASHBOARD.STATISTICS' })} icon='chart-line-up' />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.MOVIES' })}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.MOVIES.MANAGE' })}
        fontIcon='bi-chat-left'
        icon='youtube'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.MANAGE.LIST_MOVIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title={intl.formatMessage({ id: 'MENU.MOVIES.MANAGE.ADD_MOVIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.MANAGE.EDIT_MOVIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.MANAGE.DELETE_MOVIES' })} hasBullet={true} />

      </SidebarMenuItemWithSub>
      
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.MOVIES.CATEGORIES' })}
        fontIcon='bi-chat-left'
        icon='category'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.CATEGORIES.LIST_CATEGORIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title={intl.formatMessage({ id: 'MENU.MOVIES.CATEGORIES.ADD_CATEGORIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.CATEGORIES.EDIT_CATEGORIES' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.MOVIES.CATEGORIES.DELETE_CATEGORIES' })} hasBullet={true} />

      </SidebarMenuItemWithSub>
      <SidebarMenuItem to='/apps/snacks' title={intl.formatMessage({ id: 'MENU.MOVIES.SNACKS' })} icon='coffee' />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.USERS' })}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.USERS.MANAGE' })}
        fontIcon='bi-chat-left'
        icon='user'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.USERS.MANAGE' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title={intl.formatMessage({ id: 'MENU.USERS.MANAGE.LIST_USERS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.USERS.MANAGE.EDIT_USERS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.USERS.MANAGE.DELETE_USERS' })} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.REVIEWS' })}</span>
        </div>
      </div>

      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.REVIEWS.MANAGE' })}
        fontIcon='bi-chat-left'
        icon='star'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.REVIEWS.MANAGE.LIST_REVIEWS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.REVIEWS.MANAGE.EDIT_REVIEWS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.REVIEWS.MANAGE.DELETE_REVIEWS' })} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.COMMENTS' })}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.COMMENTS.MANAGE' })}
        fontIcon='bi-chat-left'
        icon='messages'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.COMMENTS.MANAGE.LIST_COMMENTS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.COMMENTS.MANAGE.EDIT_COMMENTS' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.COMMENTS.MANAGE.DELETE_COMMENTS' })} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.SETTINGS' })}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.SETTINGS.GENERAL' })}
        fontIcon='bi-chat-left'
        icon='setting-4'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.SETTINGS.GENERAL.SITE_INFORMATION' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.SETTINGS.GENERAL.SOCIAL_MEDIA' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.SETTINGS.GENERAL.SOCIAL_MEDIA' })} hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title={intl.formatMessage({ id: 'MENU.SETTINGS.SECURITY' })}
        fontIcon='bi-chat-left'
        icon='shield-tick'
      >
        <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.SETTINGS.SECURITY.CHANGE_PASSWORD' })} hasBullet={true} />
        <SidebarMenuItem to='/apps/upload-assets' title={intl.formatMessage({ id: 'MENU.SETTINGS.SECURITY.MANAGE_ROLES' })} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.REPORTS' })}</span>
        </div>
      </div>
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.REPORTS.SALES_REPORT' })} icon='chart-simple-3' />
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.REPORTS.USER_ACTIVITY_REPORT' })} icon='mouse-square' />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({ id: 'MENU.SUPPORT' })}</span>
        </div>
      </div>
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.SUPPORT.HELP_CENTER' })} icon='question-2' />
      <SidebarMenuItem to='/apps/assets/search-assets' title={intl.formatMessage({ id: 'MENU.SUPPORT.CONTACT_SUPPORT' })} icon='support-24' />
      {/* <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub> */}
    </>
  )
}

export { SidebarMenuMain }
