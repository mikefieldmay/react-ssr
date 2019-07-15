import { App } from './App'
import { HomePage } from './pages/HomePage';
import { UsersListPage } from './pages/UsersListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AdminsListPage } from './pages/AdminsListPage';

export const Routes = [
    {
        ...App,
        routes: [
            {
                path: '/',
                exact: true,
                ...HomePage
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                path: '/users',
                ...UsersListPage
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
