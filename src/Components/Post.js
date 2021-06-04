import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <>
      {/*<div className="card-container">
        <div className="card mt-4">
          <div className="card-body">
            <h4>
              {post.title} {moment(post.createdAt).fromNow()}
            </h4>

            <div className="card-subtitle  mb-2">
              <strong>{post.tags.map((tag) => `${tag} `)}</strong>
            </div>
            <div className="card-text mb-2">{post.message}</div>

            <Link to={`/post/${post._id}`}>
              <button type="button" className="btn btn-info disabled">
                Read More
              </button>
            </Link>
          </div>
        </div>
  </div>*/}
  <div className="post">
  <img className="postImg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--KCRN0Wuf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/356/ceb8dc0f-a77b-4f89-84da-52216a4286e1.png" alt="" />
  <div className="postInfo">
    <div className="postCats">
    {post.tags.map((tag) => `${tag} `)}
      </div>
    <Link to={`/post/${post._id}`} className="link">
      <span className="postTitle">{post.title}</span>
    </Link>
    <hr />
    <span className="postDate">
      {new Date(post.createdAt).toDateString()}
    </span>
  </div>
  <p className="postDesc">{post.message}</p>
</div>
   
    </>
  );
};

export default Post;
