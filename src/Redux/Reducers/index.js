import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./auth.reducer";

import {
  postListReducer,
  postCreateReducer,
  postUpdateReducer,
} from "./post.reducer";

export const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postList: postListReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
});
