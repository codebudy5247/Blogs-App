import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_CREATE_RESET,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_RESET

} from "../Actions/types.action";

export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
      };

    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true }
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case POST_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const postUpdateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return { loading: true }
    case POST_UPDATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    // case POST_UPDATE_RESET:
    //   return { post: {} }
    default:
      return state
  }
}