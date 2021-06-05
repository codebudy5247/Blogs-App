import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./auth.reducer";

import {
  themeReducer
} from "./theme.reducer"

import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
  postUpdateReducer,
} from "./post.reducer";

export const reducers = combineReducers({
  theme:themeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postList: postListReducer,
  postDetails:postDetailsReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
});
