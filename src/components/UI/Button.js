import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} type="submit">
      {props.children}
    </button>
  );
};

export default Button;
