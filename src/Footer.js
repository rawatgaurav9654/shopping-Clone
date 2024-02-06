import React from "react";
import './Footer.css';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
// import "../components-styles/footerStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Influencers</b>
              <p>Collaborate</p>
              <p>Community</p>
            </div>
            <div>
              <b>For Promotions</b>
              <p>Retailers</p>
              <p>Business</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook className="footer_icons" />
                <AiFillTwitterCircle className="footer_icons" />
                <AiFillInstagram  className="footer_icons"/>
              </div>
              <div>
                <AiFillApple className="footer_icons" />
                <FaGooglePlay  className="footer_icons"/>
              </div>
            </div>
          </div>
          <p className="footer-copyright"> Copyright ©️ 2024 Made By Garv with ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
