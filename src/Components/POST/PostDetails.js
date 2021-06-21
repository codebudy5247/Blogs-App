import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Message from "../../Components/Message"
import Loader from '../../Components/Loader/Loader'
import Sanitized from "../POST/Sanitized"

import {
    getPost,
} from '../../Redux/Actions/post.action'

const PostDetails = ({ match }) => {
    const dispatch = useDispatch()
    const postDetails = useSelector((state) => state.postDetails)
  const { loading, error, post } = postDetails


  useEffect(() => {
    
    if (!post._id || post._id !== match.params.id) {
      dispatch(getPost(match.params.id))
     
    }
  }, [dispatch, match])

    return (
        <>
        {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
            
            <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.selectedFile}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts">
                {post.user}
              </Link>
            </b>
          </span>
          <span>
          <big >
          {new Date(post.createdAt).toDateString()}
          </big>
          </span>
        </div>
        <p className="singlePostDesc">
        <Sanitized html={post.sanitizedHtml} />
          <br />
          </p>
      </div>
    </div>
            </>
            
            
          )}

          {/*  Post Footer */}
        </>
    )
}

export default PostDetails
