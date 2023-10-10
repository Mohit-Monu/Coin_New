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

        <h2>Our Mission</h2>
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
          <li>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <strong>Easy Sign-up:</strong>Joining our community takes just a few clicks Sign up, log in, and start investing within minutes.
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>User-Friendly Interface:</strong> Our intuitive platform makes investing a breeze, even for beginners. Access your investments, track your earnings, and make decisions with ease.
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Diverse Investment Options:</strong> Choose from a variety of investment opportunities tailored to your financial goals and risk tolerance.
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Educational Resources:</strong> We believe in empowering our users. Explore our educational content to enhance your financial knowledge and make informed investment decisions.
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>No Minimum Requirement:</strong> To get started investing with a minimum amount from ₹1.
          </li>
        </ul>

        <h2>Invest in Ethical Mutual Funds</h2>
        <p>At Coin.New, we offer you the opportunity to invest in ethical mutual funds. Make a positive impact on the world while earning returns on your investements.</p>
      </div>
      <div className={styles["about-image"]}>
        <img src={img1} alt="img1" width={500} />
      </div>
    </div>
  );
}

export default About;
