import axios from "axios";
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_RESET,
} from "./types.action";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST });
    const { data } = await axios.get(
      `https://blogs-app-api.herokuapp.com/posts`
    );
    console.log(data);
    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const { data } = await axios.get(
      `https://blogs-app-api.herokuapp.com/posts/${id}`
    );
    console.log(data);
    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const AddPost = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      "https://blogs-app-api.herokuapp.com/posts",
      {},
      config
    );
    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log(post._id, "working");

    const { data } = await axios.put(
      `https://blogs-app-api.herokuapp.com/posts/${post._id}`,
      post,
      config
    );
    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: POST_DETAILS_SUCCESS, payload: data })
    //history.push(`post/${post._id}`);
  } catch (error) {
    console.log(error);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: message,
    });
  }
};
