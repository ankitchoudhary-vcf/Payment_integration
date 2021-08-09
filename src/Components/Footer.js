import React from "react";

export const Footer = () => {
  const footerStyle = {
    position: "relative",
    top: "12vh",
    width: "100%",
  };

  return (
    <footer className="footer has-background-dark mt-6" style={footerStyle}>
      <div className="content has-text-centered has-text-white">
        <p>
          <strong className="has-text-white">PayDoni</strong> created by{" "}
          <a href="https://github.com/ankit1509">Ankit Choudhary</a>.
        </p>
      </div>
    </footer>
  );
};
