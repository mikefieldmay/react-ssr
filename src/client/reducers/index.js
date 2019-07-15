import { combineReducers } from 'redux';
import { reducer as usersReducer } from './usersReducer'
import { reducer as authReducer } from './authReducer'
import { reducer as adminsReducer } from './adminsReducer'

export const reducers = combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
})
