import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import decode from "jwt-decode";
import PersonIcon from "@material-ui/icons/Person";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';


import { logout } from "../../Redux/Actions/auth.action";
const Header = () => {
  const classes = useStyles();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
    }

    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [location]);
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography className={classes.heading} variant="h2" align="center">
            Blogs{" "}
          </Typography>

          {/* <LinkContainer to="/jobs">
              <Nav.Link>
                <button type="button" class="btn btn-primary btn-sm">
                  Jobs
                </button>
              </Nav.Link>
</LinkContainer>*/}
        </div>

        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <>
           
              <div>
                <Link to="/posts">
                  <PostAddIcon fontSize="large" />
                </Link>
              </div>
              <div>
                <Link to={`/profile/${user.result._id}`}>
                  <PersonIcon fontSize="large" />
                </Link>
              </div>
              
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logoutHandler}
              >
                <ExitToAppIcon fontSize="large" />
              </Button>
              <div>
                <label htmlFor="theme" >
                <Brightness4SharpIcon fontSize="large" />
                </label>
            </div>
            </>
          ) : (
            <>
              {/*<Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
          <LockOpenSharpIcon fontSize="large" />
              </Button>*/}
              <Typography
                className={classes.heading}
                variant="h6"
                align="center"
              >
                A Place to share your Knowledge.{" "}
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
