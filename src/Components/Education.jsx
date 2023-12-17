import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from "../images/eduback.jpg";

export default function Education() {
  return (
    <section id="education">
      <img className="background" src={image} alt="edu" />
    
      <h2 className="edu" style={{color:"white"}}>Education</h2>
      <div className="parts">
        <div className="btech b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h3 className="type">Btech in Computer Science and Technology (2022-2026)</h3>
          <p className="small">
            Studing in University of Engineering and Management ,Kolkata with 10.0 CGPA in the
            second year
          </p>
        </div>
        <div className="isc b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h3 class="type">ISC (Higher Secondary)</h3>
          <p className="small">Successfully passed ISC with 94.75% with Science</p>
        </div>
        <div className="icse b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h3 class="type">ICSE (Secondary)</h3>
          <p className="small">Successfully passed ISCE with 92% with Science</p>
        </div>

      </div>
    </section>
  );
}
