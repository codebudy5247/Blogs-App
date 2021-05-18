import React from "react";
import { Link} from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large"> Create a  post, like,comment and share other posts.</h1>
            
            <div className="buttons">
              <Link to="/login" className="getstart">
                Get Started
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
