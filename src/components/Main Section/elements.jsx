import React from "react";
import Button from "../UI/Button";

const StyledSectionTextContainer = (props) => {
  return <div className="flex flex-col gap-5">{props.children}</div>;
};

const StyledHeadingContainer = (props) => {
  return <div className="text-center xl:text-start">{props.children}</div>;
};

const StyledCTAContainer = (props) => {
  return <div className="text-center xl:text-left">{props.children}</div>;
};

const StyledButton = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <Button>{props.buttonText}</Button>
    </a>
  );
};

export {
  StyledSectionTextContainer,
  StyledHeadingContainer,
  StyledCTAContainer,
  StyledButton,
};
