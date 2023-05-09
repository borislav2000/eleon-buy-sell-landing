import React from "react";

const StyledSectionHeading = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

const StyledSectionSubheading = (props) => {
  return <h3 className={props.className}>{props.children}</h3>;
};

const StyledParagraphWithSpan = (props) => {
  return (
    <p className={props.paragraphClassName}>
      {props.text} <span className={props.spanClassName}>{props.spanText}</span>
    </p>
  );
};

export {
  StyledSectionHeading,
  StyledSectionSubheading,
  StyledParagraphWithSpan,
};
