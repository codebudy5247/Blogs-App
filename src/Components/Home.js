import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import Post from "../Components/POST/Post";
import Message from "../Components/Message";
import Loader from "../Components/Loader/Loader";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar";
import { getPosts, AddPost } from "../Redux/Actions/post.action";
import { POST_CREATE_RESET } from "../Redux/Actions/types.action";

const Home = ({ history }) => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;
  console.log(postList);

  const postCreate = useSelector((state) => state.postCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    post: createdPost,
  } = postCreate;

  useEffect(() => {
    dispatch({ type: POST_CREATE_RESET });

    if (successCreate) {
      history.push(`/post/${createdPost._id}/edit`);
    }

    dispatch(getPosts());
  }, [dispatch, history, successCreate, createdPost]);

  const createPostHandler = () => {
    dispatch(AddPost());
  };
  return (
    <>
    
      <Topbar />
      {/*<div className="heading-container">
        <i class="bi bi-three-dots"></i>
        <h1>
          <small> My Feeds</small>
        </h1>
  </div>*/}
      <Col className="text-left">
        <Button className="btn btn-outline-success" onClick={createPostHandler}>
          <CreateIcon /> Write
        </Button>
      </Col>
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        
          <div className="posts">
            {posts.map((post) => (
              <div key={post._id}>
                <Post post={post} />
              </div>
            ))}
          </div>
          
        </>
      )}
      <Sidebar />
      
    </>
  );
};

export default Home;
