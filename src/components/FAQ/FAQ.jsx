import React from "react";

function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>
      <div className="accordion" id="faqAccordion">
        {/* FAQ Items */}
        <div className="card">
          <div className="card-header" id="faqHeading1">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#faqCollapse1"
                aria-expanded="true"
                aria-controls="faqCollapse1"
              >
                Question 1: What is Coin New?
              </button>
            </h5>
          </div>
          <div
            id="faqCollapse1"
            className="collapse show"
            aria-labelledby="faqHeading1"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
              Cryptocurrency is a digital or virtual form of currency that uses
              cryptography for security. It operates on a decentralized ledger
              called blockchain.
            </div>
          </div>
        </div>

        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
}

export default FAQ;
