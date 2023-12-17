import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Education() {
  return (
    <section id="education">
      <h2 className="edu">Education</h2>
      <div className="parts">
        <div className="btech b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h2 className="type">Btech in Computer Science and Technology (2022-2026)</h2>
          <p>
            Studing in University of Engineering and Management ,Kolkata with 10.0 CGPA in the
            second year
          </p>
        </div>
        <div className="isc b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h2 class="type">ISC (Higher Secondary)</h2>
          <p>Successfully passed ISC with 94.75% with Science</p>
        </div>
        <div className="icse b">
        <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
          <h2 class="type">ICSE (Secondary)</h2>
          <p>Successfully passed ISCE with 92% with Science</p>
        </div>
      </div>
    </section>
  );
}
