import React from "react";
// import axios from "axios";
import { useState, useEffect } from 'react';

export const Donate = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      payment_capture: 1,
        amount: amount,
        currency: "INR",
    });
  }, [amount])

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    var options = {
      key: "rzp_test_WKw1wPTThc1bXI",
      amount: data.amount*100,
      currency: data.currency,
      order_id: data.order_id,
      name: "PayDoni",
      description: "Donation",
      image: "https://example.com/your_logo",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !email || !amount || name === " " || email === " " || amount === " " || amount === " " || amount < 1 ) {
      alert("Oops!! Invalid Input")
    }
    else {
      displayRazorpay();
    }
  }

  return (
    <>
      <div className="notification mt-6 has-text-centered is-info is-light mx-4">
        <h1 className="title">Donate Here !!</h1>
        <hr className="has-background-info"/>
      </div>
      <div className="columns notification is-info is-light mt-6 is-centered is-vcentered mx-4">
        <div className="column notification is-info is-6 mx-4 is-hidden-mobile">
          <figure className="image is-3by2">
            <img
              className="has-ratio"
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="donate"
            />
          </figure>
        </div>
        <div className="column notification is-link is-light is-6">
          <form>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Amount</label>
              <div class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="Enter the Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
              <button class="button is-fullwidth is-info" onClick={handleSubmit}>Pay Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Donate;
