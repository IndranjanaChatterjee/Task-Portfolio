/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import { Typewriter } from 'react-simple-typewriter'

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wallll.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {

  

  return (
    <section id="home" className="min-height">
      <img src={image} className="background" alt="" />
      <div
        style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem",fontSize:"3rem" ,color: "white" }}
      >
        <h1>Hii I,m Indranjana Chatterjee {}
          <span style={{fontSize:"7rem"}}>
          <Typewriter
            words={['Competitive Coder', 'Web Developer', 'Public Speaker']}
            loop={1000}
            cursor
            cursorStyle='_'
            typeSpeed={120}
            deleteSpeed={80}
            
          />
          </span>
          
        </h1>
        
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
