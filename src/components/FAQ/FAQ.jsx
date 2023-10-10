import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./FAQ.module.css"; // Adjust the import path to your CSS file

function FAQ() {
  const [isOpen, setIsOpen] = useState(0); // Initialize with 0 to open the first question

  const questions = [
    {
      question: "Why Choose Coin.New?",
      answer: (
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges or security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>High-Yield Secure:</strong> We offer competitive interest rates, ensuring your hand-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Free and Secure:</strong> Enjoy the benefits of investing without any hidden charges and security concerns. We prioritize the safety and growth of your investments.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>High-Yield Investements:</strong> We offer competitive interest rates, ensuring your hard-earned money works harder for you. Watch your funds multiply effortlessly.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
            <strong>Easy Sign-up:</strong> Joining our community takes just a few clicks Sign up, log in, and start investing within minutes.
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
      ),
    },
    {
      question: "How to use?",
      answer: (
        // <p>Our investment platform is designed to make the investment process seamless and hassle-free: </p>
        <ol>
          <li><strong>Sign Up:</strong> Create your account with just a few steps.</li>
          <li><strong>Choose Your Investments:</strong> Explore our diverse range of investment options.</li>
          <li><strong>Set Your Preferences:</strong> Tailor your investment strategy to meet your financial goals.</li>
          <li><strong>Watch Your Money Grow:</strong> Sit back and watch your investments grow over time.</li>
        </ol>
      ),
    },
    {
      question: "Join Thousands of Savvy Investors",
      answer: [
        "Our growing community of investors is already reaping the rewards. Are you ready to be a part of it?",
      ],
    },
    // Add more questions and answers as needed
  ];

  const toggleAccordion = (index) => {
    if (index === isOpen) {
      setIsOpen(-1); // Close the currently open question if it's clicked again
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div  className="container">
      <h1 className="text-center m-2">FAQ</h1>
      <div className="accordion-header" style={{paddingBottom:"20px",marginTop:"20px"}} id="faqAccordion">
        {questions.map((q, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`faqHeading${index}`}>
              <h5 className="mb-0">
                <button
                  className={`btn btn-link ${isOpen === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    color: "black", // Black text color
                    fontWeight: "bold", // Bold font weight
                    textDecoration: "none", // No underline
                  }}
                >
                  {q.question}
                </button>
              </h5>
            </div>
            <div
              id={`faqCollapse${index}`}
              className={`collapse ${isOpen === index ? 'show' : ''}`}
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{q.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
