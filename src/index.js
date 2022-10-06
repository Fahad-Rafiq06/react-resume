import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

function Resume() {
  return (
    <div className="Main">
      <hr />
      <h1>Fahad Rafiq</h1>

      <h4>Front-End Developer</h4>
      <hr />
      <div className="resumeDiv">
        <h3>About:</h3>
        <p>I am a Developer by Passion and Profession</p>
        <h3>Skills: </h3>
        <ul className="skillslist">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ecma-Script</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        <h3>Experience: </h3>
        <p>
          <ul>
            <li>WordPress & Shopify Developer at Dataminds Technology</li>
          </ul>
        </p>
        <p className="ppp">From Oct 2021 to Present</p>
        <p>
          <ul>
            <li>Freelancing</li>
          </ul>
        </p>
        <p className="ppp">From January 2021 to Present</p>
      </div>
    </div>
  );
}

ReactDom.render(<Resume />, document.querySelector("#root"));