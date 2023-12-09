/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tech.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CinemaniaSpot",
    description:
      "Welcome to MovieHub Frontend, a React.js-based web development project that brings the world of movies to your screen! This repository serves as the frontend component for a dynamic and interactive movie website.",
    url: "https://cinemania-spot.netlify.app/",
  },
  {
    title: "Quiz sApp",
    description:
      "Welcome to the Quiz App.",
    url: "https://qquizzicalll.netlify.app/",
  },
  {
    title: "Frontend Mentor - Newsletter sign-up form with success message solution",
    description:
      "This is a solution to the Newsletter sign-up form with success message challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    url: "https://newsletter-sol.netlify.app/",
  },
  {
    title: "GAdvice generator app",
    description:
      "This is a solution to the Advice generator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    url: "https://indranjanachatterjee.github.io/Advice-Generator-App/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
