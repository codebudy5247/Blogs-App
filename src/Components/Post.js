import React from "react";
import { Link } from "react-router-dom";
import Sanitized from "../Components/POST/Sanitized"

const Post = ({ post }) => {
  return (
    <>

      <div className="post">
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <Link to={`/post/${post._id}`} className="link">
          <img className="postImg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--KCRN0Wuf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/356/ceb8dc0f-a77b-4f89-84da-52216a4286e1.png" alt="" />
        </Link>
        <div className="postInfo">
          <div className="postCats">
            {post.tags.map((tag) => `${tag} `)}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />

        </div>
        <p className="postDesc">
          <Sanitized html={post.message} />
        </p>
      </div>

    </>
  );
};

export default Post;
