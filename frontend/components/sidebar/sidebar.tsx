import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {ViewIcon} from '../icons/sidebar/view-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import {useSidebarContext} from '../layout/layout-context';
import {ChangeLogIcon} from '../icons/sidebar/changelog-icon';
import {useRouter} from 'next/router';
import SavingsIcon from '@mui/icons-material/Savings';
import StyleIcon from '@mui/icons-material/Style';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
       <Box
           as="aside"
           css={{
              height: '100vh',
              zIndex: 202,
              position: 'sticky',
              top: '0',
           }}
       >
          {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

          <Sidebar collapsed={collapsed}>
             <Sidebar.Header>
                <CompaniesDropdown />
             </Sidebar.Header>
             <Flex
                 direction={'column'}
                 justify={'between'}
                 css={{height: '100%'}}
             >
                <Sidebar.Body className="body sidebar">
                   <SidebarItem
                       title="Inicio"
                       icon={<DashboardIcon />}
                       isActive={router.pathname === '/'}
                       href="/"
                   />
                   <SidebarMenu title="Menú Principal">
                      <SidebarItem
                          isActive={router.pathname === '/accounts'}
                          title="Perfil"
                          icon={<AccountBalanceIcon />}
                          href="accounts"
                      />
                      <SidebarItem
                          isActive={router.pathname === '/expenses'}
                          title="Pagos"
                          icon={<AccountBalanceWalletIcon />}
                          href="expenses"
                      />
                      <CollapseItems
                          icon={<StyleIcon />}
                          items={['Banks Accounts', 'Credit Cards', 'Loans']}
                          title="Categorias"
                      />

                      <SidebarItem
                          isActive={router.pathname === '/customers'}
                          title="Balances"
                          icon={<StackedLineChartIcon />}
                      />
                      <SidebarItem
                          isActive={router.pathname === '/products'}
                          title="Ahorros"
                          icon={<SavingsIcon />}
                      />
                      {/*<SidebarItem*/}
                      {/*   isActive={router.pathname === '/reports'}*/}
                      {/*   title="Reportes"*/}
                      {/*   icon={<ReportsIcon />}*/}
                      {/*/>*/}
                   </SidebarMenu>

                   <SidebarMenu title="General">
                      <SidebarItem
                          isActive={router.pathname === '/developers'}
                          title="Developers"
                          icon={<DevIcon />}
                      />
                      <SidebarItem
                          isActive={router.pathname === '/view'}
                          title="View Test Data"
                          icon={<ViewIcon />}
                      />
                      <SidebarItem
                          isActive={router.pathname === '/settings'}
                          title="Settings"
                          icon={<SettingsIcon />}
                      />
                   </SidebarMenu>

                   <SidebarMenu title="Updates">
                      <SidebarItem
                          isActive={router.pathname === '/changelog'}
                          title="Changelog"
                          icon={<ChangeLogIcon />}
                      />
                   </SidebarMenu>
                </Sidebar.Body>
                <Sidebar.Footer>
                   <Tooltip content={'Settings'} rounded color="primary">
                      <SettingsIcon />
                   </Tooltip>
                   <Tooltip content={'Adjustments'} rounded color="primary">
                      <FilterIcon />
                   </Tooltip>
                   <Tooltip content={'Profile'} rounded color="primary">
                      <Avatar
                          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          size={'sm'}
                      />
                   </Tooltip>
                </Sidebar.Footer>
             </Flex>
          </Sidebar>
       </Box>
   );
};
