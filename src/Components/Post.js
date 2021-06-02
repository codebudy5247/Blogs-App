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
  <img className="postImg" src="https://assets.entrepreneur.com/content/3x2/2000/20200218153611-instagram.jpeg" alt="" />
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
