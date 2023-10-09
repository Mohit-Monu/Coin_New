import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      {/* Use Font Awesome brand icons here */}
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faLinkedin} />
      {/* Add more brand icons as needed */}
    </footer>
  );
}

export default Footer;
