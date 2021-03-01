import axios from "axios";
import {
  CLEAR_ROLES,
  CREATE_ROLE,
  // DELETE_ROLE,
  // FETCH_ROLE,
  FETCH_ROLES,
  // CLEAR_ROLES,
  // UPDATE_ROLE,
} from "../constants/actionTypes";

export const clearRoles = () => async (dispatch) => {
  dispatch({ type: CLEAR_ROLES });
};

export const getRoles = (scriptId) => async (dispatch) => {
  console.log("dispatch roles");
  const { data } = await axios.get(`/roles/${scriptId}`);
  dispatch({ type: FETCH_ROLES, payload: data });
};

// export const getScript = (id) => async (dispatch) => {
//   const { data } = await axios.get(`/${id}`);
//   dispatch({ type: FETCH_ONE, payload: data });
// };

export const createRole = (role) => async (dispatch) => {
  console.log(role);
  const { data } = await axios.post(`/roles/${role.script}`, role);
  dispatch({ type: CREATE_ROLE, payload: data });
};

// export const updateScene = (scene) => async (dispatch) => {
//   const { data } = await axios.patch(`/scene/${scene.id}`, scene);
//   dispatch({ type: UPDATE_SCENE, payload: data });
// };

// export const deleteScene = (scriptId, id) => async (dispatch) => {
//   const { data } = await axios.delete(`/script/${scriptId}/scene/${id}`);
//   dispatch({ type: DELETE_SCENE, payload: data.id });
//   // return data.id;
// };

// export const likeScript = (id) => async (dispatch) => {
//   const { data } = await axios.patch(`/${id}/likeScript`);
//   dispatch({ type: LIKE, payload: data });
// };
