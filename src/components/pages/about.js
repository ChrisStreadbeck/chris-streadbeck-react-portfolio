import React from "react";

import profilePicture from "../../../static/assets/images/about/profpic.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        After being an accountant for 15 years I realized that the field had
        very little left to offer me in terms of new learning and experiences. I
        found myself spending more and more time learning web development on my
        own and that I enjoyed making freelance websites for others far more
        than counting beans. I decided in early 2019 to make the official jump
        and am now full steam ahead on a career in programming.
        <div className="skills">
          <ul type="circle">
            <div>
              <u>PROFESSIONAL SKILLS PROFILE</u>
            </div>
            <li>
              Javascript, ReactJS, Python 3, HTML5, CSS, Flask, JSON, Git,
              MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid
            </li>
            <li>
              Design Tools: Visual Studio Code, Postman, Heroku, GitHub,
              Wordpress
            </li>
            <li>
              Quickbooks, QB online, Microsoft Office, Microsoft Excel, Lacerte
            </li>
            <li>Spanish Speaking</li>
          </ul>
          <a
            className="github"
            href="https://github.com/ChrisStreadbeck"
            target="_blank"
          >
            My GitHub
          </a>
          <a
            className="github"
            href="https://drive.google.com/file/d/1qE-YRyMXHUdM_zWvX2yzcpx89oLzq2kY/view?ths=true"
            target="_blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
