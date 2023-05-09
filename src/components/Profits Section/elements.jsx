import React from "react";
import { StyledParagraphWithSpan } from "../Typography/Тypography";

const StyledHeadingContainer = (props) => {
  return <div className="text-center">{props.children}</div>;
};

const StyledSectionHeading = (props) => {
  return <StyledParagraphWithSpan {...props}></StyledParagraphWithSpan>;
};

const StyledProfitsContainer = (props) => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full items-center justify-center">
      {props.children}
    </div>
  );
};

const StyledProfitsCardContainer = (props) => {
  return (
    <div className="flex flex-col bg-[#F9F9F9] rounded-[20px] p-9 items-center justify-center gap-4 flex-1 max-w-2xl">
      {props.children}
    </div>
  );
};

const StyledProfitsCard = (props) => {
  return (
    <StyledProfitsCardContainer>
      <div className="text-center">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="text-center">
        <p className="font-poppins font-medium text-2xl">{props.cardHeading}</p>
      </div>
      <div className="w-full text-center">
        <p className="break-words font-inter">{props.cardDescription}</p>
      </div>
    </StyledProfitsCardContainer>
  );
};

export {
  StyledHeadingContainer,
  StyledSectionHeading,
  StyledProfitsContainer,
  StyledProfitsCardContainer,
  StyledProfitsCard,
};
