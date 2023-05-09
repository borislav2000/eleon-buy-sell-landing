import React from "react";

const Image = (props) => {
  return (
    <img
      srcSet={props.sources}
      sizes={props.sizes}
      src={props.defaultImg}
      alt={props.imgAlt}
    />
  );
};

export default Image;
