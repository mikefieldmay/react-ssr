import { HomePage } from './pages/HomePage';
import { UsersListPage } from './pages/UsersListPage';

export const Routes = [
    {
        path: '/',
        exact: true,
        ...HomePage
    },
    {
        path: '/users',
        ...UsersListPage
    }
];
