import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./auth.reducer";

import {
  themeReducer
} from "./theme.reducer"

import {
  alertReducer
} from "./alertReducer"
import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
  postUpdateReducer,
} from "./post.reducer";

export const reducers = combineReducers({
  alert:alertReducer,
  theme:themeReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postList: postListReducer,
  postDetails:postDetailsReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
});
