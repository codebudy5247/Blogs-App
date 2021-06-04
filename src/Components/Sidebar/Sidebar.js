import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/*<div className="sidebarItem">
        <span className="sidebarTitle">CONTACT US</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
  </div>*/}
      <div className="sidebarItem">
        <span className="sidebarTitle">POPULAR TAGS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              PROGRAMMING
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              DEVELOPEMENT
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              JAVASCRIPT
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              REACT
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              FRONTEND DEV
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts">
              BACKEND DEV
            </Link>
          </li>
        </ul>
      </div>
      {/*<div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
  </div>*/}
    </div>
  );
}
