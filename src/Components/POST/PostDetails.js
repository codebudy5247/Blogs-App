import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../../Components/Message"
import Loader from '../../Components/Loader/Loader'

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
            <h3>{post.title}</h3> 
          )}
        </>
    )
}

export default PostDetails
