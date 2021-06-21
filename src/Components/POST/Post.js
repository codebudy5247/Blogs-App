import React from "react";
import { Link } from "react-router-dom";
import Sanitized from "./Sanitized"
import moment from 'moment'
import Avatar from "../Avatar"
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';


const Post = ({ post }) => {
  return (
    <>
    
   
      <div className="post">
      
     {/*  Post Header */}
      <div className="card_header">
      <div className="d-flex">
          {/*<Avatar
           src={post.creator.avatar} 
          size="big-avatar" />*/}

          <div className="card_name">
              <h6 className="m-0">
              
              </h6>
              <big >
                  {moment(post.createdAt).fromNow()}
              </big>
          </div>
      </div>

      <div className="nav-item dropdown">
          <span id="moreLink" data-toggle="dropdown">
           <MoreHorizOutlinedIcon />
          </span>

          <div className="dropdown-menu">
             
                  <>
                      <div className="dropdown-item">
                          <span className="material-icons">create</span> Edit Post
                      </div>
                      <div className="dropdown-item">
                          <span className="material-icons">delete_outline</span> Remove Post
                      </div>
                  </>
              

              <div className="dropdown-item">
                  <span className="material-icons">content_copy</span> Copy Link
              </div>
          </div>
      </div>
  </div>  
         {/* Post Body */}
        <Link to={`/post/${post._id}`} className="link">
          <img className="postImg" src={post.selectedFile} alt="" />
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
          <Sanitized html={post.sanitizedHtml} />
        </p>


        

      </div>
      
      

    </>
  );
};

export default Post;
