import React from "react";
import { useState } from "react";
import "./DeliveryPayment.css";
import visa from "../Assets/visa.svg";
import { Link } from "react-router-dom"

const DeliveryPayment = () => {
  const [state, setState] = useState(true);

  function onToggle() {
    setState((prevState) => !prevState);
  }

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
          />
        </div>

        <div className="minor-info">
          <div>
            <p className="minor-details">Expiration date</p>
            <input className="minor-input" type="text" />
          </div>

          <div>
            <p className="minor-details">Security code</p>
            <input className="minor-input" type="text" />
          </div>
        </div>

        <div className="checkbox-container">
          <input onClick={onToggle} type="checkbox" id="cb1" defaultChecked />
          <label htmlFor="cb1">
            My billing address is same as my shipping addresss.
          </label>
        </div>

        <div className={`toggled-state ${state ? "hide-toggled-state" : ""}`}>
          <p className="greetings" style={{ marginTop: "49px" }}>
            Billing Address
          </p>

          <div className="major-info">
            <p className="details">First name *</p>
            <input className="details-input" type="text" />
          </div>

          <div className="major-info">
            <p className="details">Last name *</p>
            <input className="details-input" type="text" />
          </div>

          <div className="major-info">
            <p className="details">Street Address *</p>
            <input className="details-input" type="text" />
          </div>

          <div className="minor-info">
            <div>
              <p className="minor-details">Apt or unit (optional)</p>
              <input className="minor-input" type="text" />
            </div>
            <div>
              <p className="minor-details">City *</p>
              <input className="minor-input" type="text" />
            </div>
          </div>

          <div className="minor-info">
            <div>
              <p className="minor-details">State *</p>
              <input className="minor-input" type="text" />
            </div>
            <div>
              <p className="minor-details">Zip code *</p>
              <input className="minor-input" type="text" />
            </div>
          </div>

          <div className="major-info">
            <p className="details">Phone number *</p>
            <input className="details-input" type="text" />
          </div>
          <p className="additional-txt">
            We'll contact you in case anything comes up with your order.
          </p>
        </div>

        <Link to="/deliveryerror">
          <button className="proceed">Confirm</button>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryPayment;
