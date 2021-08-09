import React from "react";
import axios from "axios";

export const Donate = () => {
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
    var data;
    try {
        data = await axios.post("http://localhost:8080/razorpay", {
            payment_capture: 1,
            amount: 499,
            currency: "INR"
        });

      console.log(data);
    } catch (err) {
      console.log(err);
    }

    var options = {
      key: "rzp_test_WKw1wPTThc1bXI",
      amount: data.data.amount,
      currency: data.data.currency,
      order_id: data.data.order_id,
      name: "Donation",
      description: "Test Transaction",
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
  return (
    <div>
      <button onClick={displayRazorpay}>Donate</button>
    </div>
  );
};

export default Donate;
