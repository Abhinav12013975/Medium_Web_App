import React from "react";
import "./Footer.css";
import image from "./image.png";
import apple from "./apple.png";
import playstore from "./playstore.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={image} alt="error" className="st-image" />
        <p>
          <span>About</span>
          <span>Help</span>
          <span>Terms</span>
          <span>Privacy</span>
        </p>
        <hr />
      </div>
      <div className="plateform">
        <h3>Get the Medium app</h3>
        <div>
          <span>
            <a href="https://apps.apple.com/us/app/medium/id828256236">
              <img src={apple} alt="" className="apple_image" />
            </a>
          </span>
          <span>
            <a href="https://play.google.com/store/apps/details?id=com.medium.reader&hl=en_US&pli=1">
              <img src={playstore} alt="" className="playstore_image" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
