import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faMapMarkerAlt } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              {/* Add more brand icons as needed */}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  1234 Elm Street, City, Country
                </li>
                <li>Email: example@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
