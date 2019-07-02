import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../client/reducers';

export const createStore = () => reduxCreateStore(reducers, {}, applyMiddleware(thunk))