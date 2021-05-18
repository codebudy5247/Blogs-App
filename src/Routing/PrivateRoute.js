import { Route, Redirect } from "react-router-dom";

const PrivateRouter = (props) => {
  const Login = localStorage.getItem("userInfo");
  return Login ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRouter;
