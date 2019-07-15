import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios'

import { reducers } from '../client/reducers';

export const createStore = (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {
            cookie: req.get('cookie') || ''
        }
    })

    return reduxCreateStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))
}