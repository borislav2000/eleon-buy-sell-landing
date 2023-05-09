import React from "react";
import { StyledSectionSubheading } from "../Typography/Тypography";
import Button from "../UI/Button";

const StyledCalculatorContainer = (props) => {
  return (
    <div className="bg-[#fff] rounded-[20px] w-full max-w-lg shadow-4xl">
      {props.children}
    </div>
  );
};

const StyledCalculatorContentContainer = (props) => {
  return (
    <div className="grid grid-cols-2 py-7 px-10 gap-y-4">{props.children}</div>
  );
};

const StyledCalculatorHeaderContainer = (props) => {
  return <div className="col-span-2">{props.children}</div>;
};

const StyledCalculatorHeading = (props) => {
  return (
    <StyledSectionSubheading className="font-inter font-medium">
      {props.heading}
    </StyledSectionSubheading>
  );
};

const StyledCalculatorInputContainer = (props) => {
  return (
    <div className="col-span-2 rounded-[10px] border border-[#DFDFE2] py-3 px-4 grid grid-cols-2 gap-4 relative">
      {props.children}
    </div>
  );
};

const StyledCalculatorInput = (props) => {
  return (
    <>
      <label
        htmlFor={props.name}
        className="col-span-2 font-inter font-medium text-xs"
      >
        {props.labelText}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholderText}
        className="focus:outline-none"
        readOnly={props.readOnly ? true : false}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
};

const StyledCalculatorDescriptiveTextContainer = (props) => {
  return (
    <div className="col-span-2 items-center justify-center text-center">
      {props.children}
    </div>
  );
};

const StyledCalculatorDescrptiveText = (props) => {
  return (
    <p className={props.paragraphClassName}>
      {props.text} <span className={props.spanClassName}>{props.spanText}</span>
    </p>
  );
};

const StyledDropdownButton = (props) => {
  return (
    <div
      className="flex rounded-full border border-[#EAEAEA] hover:cursor-pointer hover:bg-[#f3f4f6] w-fit justify-self-end px-3 py-2 gap-2 items-center"
      onClick={props.onClick}
    >
      <img src={props.coinIcon} className="w-6" alt="Crypto icon" />
      <p className="font-inter font-medium text-sm">{props.coinName}</p>
    </div>
  );
};

const StyledButton = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <Button>{props.buttonText}</Button>
    </a>
  );
};

export {
  StyledCalculatorContainer,
  StyledCalculatorContentContainer,
  StyledCalculatorHeaderContainer,
  StyledCalculatorHeading,
  StyledCalculatorInputContainer,
  StyledCalculatorInput,
  StyledCalculatorDescriptiveTextContainer,
  StyledCalculatorDescrptiveText,
  StyledDropdownButton,
  StyledButton,
};
