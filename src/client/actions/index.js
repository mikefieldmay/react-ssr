import axios from 'axios';

export const FETCH_USERS="fetch_users"
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
} // when using async await, babel assumes there is a regenerator runtime defined in the working environment