import { combineReducers } from 'redux';
import { reducer as usersReducer } from './usersReducer'

export const reducers = combineReducers({
    users: usersReducer
})
