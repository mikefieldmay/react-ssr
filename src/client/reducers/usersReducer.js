import { FETCH_USERS } from '../actions';

export const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}