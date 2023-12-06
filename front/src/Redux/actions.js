import { GET_ALL_USERS, GET_USER_BY_ID, CREATE_USER, EDIT_USER } from "./action-types";
import  axios  from 'axios';

const URL = "http://localhost:4003/"

export const getAllUsers = () => {
  return async function getUsersThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.get(`${URL}user`);
    console.log(res.data);

    dispatch({ type: GET_ALL_USERS, payload: res.data });
  };
};

export const getById = (userId) => {
  const endpoint = `http://localhost:4003/user/${userId}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error) {
      return { error: `No hay un usuario con el siguiente ID: "${userId}"` };
    }
  };
};

export const createUser = (user) => {
  return async function createUserThunk(dispatch) {
    try {
      // dispatch({ type: 'loading' })
      const res = await axios.post(`${URL}register`, user);
      console.log(res.data);
      dispatch({ type: CREATE_USER, payload: res.data });
    } catch (error) {
      console.error("Error creating user:", error);
     
    }
  };
};


export const editUser = (user) => {
  return async function editUserThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.put(`${URL}user`, user);
    console.log(res.data);

    dispatch({ type: EDIT_USER, payload: res.data });
  }
}
  




