import React from "react";

const Contact = props => {
  return (
    <div>
      <h1>Contact us on {props.match.params.no}</h1>
    </div>
  );
};

export default Contact;
