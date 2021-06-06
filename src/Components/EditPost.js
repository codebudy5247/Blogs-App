import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from "react-bootstrap";
import Loader from "../Components/Loader/Loader"
import Message from "../Components/Message"
import FormContainer from "./FormContainer";
import {getPosts, updatePost} from "../Redux/Actions/post.action"
import {POST_UPDATE_RESET} from "../Redux/Actions/types.action"


const EditPost = ({ match, history }) => {
  const postId = match.params.id

  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')
  const [selectedFile,setSelectedFile] = useState('')
  const [tags,setTags] = useState('')

  const dispatch = useDispatch()
  
  const postDetails = useSelector((state) => state.postDetails)
  const { loading, error, post } = postDetails

  const postUpdate = useSelector((state) => state.postUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = postUpdate
  

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET })
      history.push(`post/${post._id}`);
    } else {
      if (!post.name || post._id !== postId) {
        dispatch(getPosts())
      } else {
        setTitle(post.title)
        setMessage(post.message)
        setSelectedFile(post.selectedFile)
        setTags(post.tags)
        
      }
    }
  }, [dispatch, history, postId, post, successUpdate])
   

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePost({
        _id: postId,
        title,
        message,
        selectedFile,
        tags,
        
      })
    )
  }
  return (
    <>
      <FormContainer>
        <h1>Create Your Blog</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Title Of Your Blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Tag1,Tag2"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="selectedFile">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.value)}
            ></Form.Control>
            <Form.File id="image-file" label="" custom></Form.File>
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Write</Form.Label>
            <Form.Control
              as="textarea"
              rows="20"
              placeholder="Tell Your Story..... <HTML Syntax>"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
      
          <Button type="submit" className="btn btn-outline-primary">
            PUBLISH
          </Button>
        </Form>
        
       
        )}
      </FormContainer>
    </>
  );
};

export default EditPost;
