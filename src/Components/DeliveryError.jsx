import React from "react";
import "./DeliveryPayment.css";
import visa from "../Assets/visa.svg";

const DeliveryError = () => {
  return (
    <div>
      <div className="headee">
        <p className="cart-txt">Delivery Payment</p>
      </div>

      <div className="bodee">
        <p className="greetings">Choose a payment method</p>
        <p className="greetings-txt">
          You will not be charged until you review this order on the next page.
        </p>

        <div className="cardtype">
          <div className="left">
            <div className="radio-container">
              <input type="checkbox" id="rd1" />
              <label htmlFor="rd1">Credit card / Debit card</label>
            </div>
          </div>

          <img src={visa} alt="" />
        </div>

        <div className="major-info">
          <p className="details" style={{ width: "86px" }}>
            Name on card{" "}
          </p>
          <input
            className="details-input"
            type="text"
            placeholder="Aubrey Graham"
            disabled
          />
        </div>

        <div className="major-info">
          <p className="details" style={{ width: "86px" }}>
            Card number
          </p>
          <input
            className="details-input"
            type="text"
            placeholder="**** **** ***** ****"
            disabled
          />
        </div>

        <div className="minor-info">
          <div>
            <p className="minor-details">Expiration date</p>
            <input disabled className="minor-input" type="text" />
          </div>

          <div>
            <p  className="minor-details">Security code</p>
            <input disabled className="minor-input" type="text" />
          </div>
        </div>

        <p
          style={{
            color: "#FF0000",
            fontSize: "12px",
            fontWeight: "500",
            textAlign: "start",
            marginTop: "16px",
          }}
        >
          Error, Please contact your partner to re-order your package.
        </p>

        <div className="checkbox-container" style={{ marginTop: "16px" }}>
          <input type="checkbox" id="cb1" disabled />
          <label htmlFor="cb1">
            My billing address is same as my shipping addresss.
          </label>
        </div>


          <button className="proceed" style={{ marginTop: "137px" }}>
            Next
          </button>
      </div>
    </div>
  );
};

export default DeliveryError;
