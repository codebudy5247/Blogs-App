import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <footer>
    <Container>
      <Row>
        <Col className='text-center py-3'>
         &copy; DevBlog
         <div >
         <GitHubIcon className='social-icons'></GitHubIcon>
         <LinkedInIcon className='social-icons'></LinkedInIcon>
         <TwitterIcon className='social-icons'></TwitterIcon>
         </div>
         
         </Col>
      </Row>
    </Container>
  </footer>
  );
};
export default Footer;