import React from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "./FormContainer";

const EditPost = () => {
  return (
    <>
      <FormContainer>
        <h1>Edit Post</h1>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="name"
              placeholder="Title Of Your Blog"
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="tag">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="tag" placeholder="Tag1,Tag2"></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
            ></Form.Control>
            <Form.File id="image-file" label="" custom></Form.File>
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Write</Form.Label>
            <Form.Control
              as="textarea"
              rows="20"
              placeholder="Tell Your Story..... <HTML Syntax>"
            ></Form.Control>
          </Form.Group>
      
          <Button type="submit" className="btn btn-outline-primary">
            PUBLISH
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default EditPost;
