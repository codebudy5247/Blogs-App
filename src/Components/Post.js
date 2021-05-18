import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import moment from "moment";
import { Avatar } from "@material-ui/core";
const Post = ({ post }) => {
  return (
    <>
      <div className="card-container">
        <div className="card mt-4">
          <div className="card-body">
            <h4>
            
            {post.title} {" "} {moment(post.createdAt).fromNow()}
            
            </h4>
           
            <div className="card-subtitle  mb-2">
            <strong>{post.tags.map((tag) => `#${tag} `)}</strong>
            </div>
            <div className="card-text mb-2">{post.message}</div>
           
            <button type="submit" className="btn btn-danger">
              Update
            </button>
            <button type="submit" className="btn btn-danger">
            Delete
          </button>
          <Link to={`/post/${post._id}`}>
          <button type="button" className="btn btn-info disabled">
            Read More
          </button>
        </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
