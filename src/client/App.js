import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './actions'
import { Header } from './components/Header';

const AppBase = ({route}) => {
    return (
    <div>
        <Header />
        {renderRoutes(route.routes)}
    </div>
    )
}

export const App = {
    component: AppBase,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}