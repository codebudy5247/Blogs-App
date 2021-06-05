import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./auth.reducer";

import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
  postUpdateReducer,
} from "./post.reducer";

export const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postList: postListReducer,
  postDetails:postDetailsReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
});
