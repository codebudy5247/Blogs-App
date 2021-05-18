import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Post from "../Components/Post";
import Message from "../Components/Message";
import Loader from "../Components/Loader/Loader";
import { getPosts } from "../Redux/Actions/post.action";

const Home = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;
  console.log(postList);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div className="heading">
      <i class="bi bi-three-dots"></i>
      <h1>
        <small> Latest Posts</small>
      </h1>
      </div>
      
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Col>
            {posts.map((post) => (
              <Row key={post._id}>
                <Post post={post} />
              </Row>
            ))}
          </Col>
        </>
      )}
    </>
  );
};

export default Home;
