import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img1.jpg";
import styles from "./About.module.css"; // Import the CSS Module

function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <h1>About Us</h1>
        <p>
          Welcome to Coin.New, your trusted source for cryptocurrency news and
          information. We are dedicated to providing you with accurate and
          up-to-date information about the world of cryptocurrencies.
        </p>
        <h1>Our Mission</h1>
        <p>At Coin.New, our mission is to empower individuals to achieve financial success by making smart investement decisions early in life. We believe that everyone should start investing early to secure their financial future.</p>
        <h2>Our Values</h2>
        <p>Our code values drive everything we do:</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Free and Secure:</strong> Enjoy the benefits of investing
            without any hidden charges or security concerns. We prioritize the
            safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>High-Yield Secure:</strong> We offer competitive interest
            rates, ensuring your hard-earned money works harder for you. Watch
            your funds multiply effortlessly.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Free and Secure:</strong> Enjoy the benefits of investing
            without any hidden charges and security concerns. We prioritize the
            safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>High-Yield Investments:</strong> We offer competitive
            interest rates, ensuring your hard-earned money works harder for
            you. Watch your funds multiply effortlessly.
          </li>
        </ul>
        {/* Add more content here */}
      </div>
      <div className={styles["about-image"]}>
        <img src={img1} alt="img1" width={500} />
      </div>
    </div>
  );
}

export default About;
