import React from "react";

import { StyledParagraphWithSpan } from "../Typography/Тypography";
import Button from "../UI/Button";
import cryptoData from "./crypto-data";

const StyledHeadingContainer = (props) => {
  return <div className="text-center">{props.children}</div>;
};

const StyledSectionHeading = (props) => {
  return <StyledParagraphWithSpan {...props}></StyledParagraphWithSpan>;
};

const StyledCryptosContainer = (props) => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-row flex-wrap items-center justify-center gap-8 max-w-screen-2xl
    "
    >
      {props.children}
    </div>
  );
};

const StyledCryptoItems = () => {
  return cryptoData.map((item) => (
    <div
      className="bg-[#fff] rounded-full flex gap-3 items-center p-3 nowrap"
      key={item.id}
    >
      <img src={`${item.coinIcon}`} className="w-9" alt="Crypto Icon" />
      <p className="font-inter font-semibold text-[#151A1C]">{item.coinName}</p>
    </div>
  ));
};

const StyledButton = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <Button>{props.buttonText}</Button>
    </a>
  );
};

export {
  StyledHeadingContainer,
  StyledSectionHeading,
  StyledCryptosContainer,
  StyledCryptoItems,
  StyledButton,
};
