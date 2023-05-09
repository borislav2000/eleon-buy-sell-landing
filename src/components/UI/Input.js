import React from "react";

const Input = (props) => {
  return (
    <div className="mb-2">
      <label
        className="block text-sm font-inter font-semibold text-[#151A1C] "
        labelfor={props.name}
      >
        {props.labelText}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        ref={props.refer}
        className="w-full mt-2 rounded-md border border-[#CECECE] focus:ring-gold focus:border-gold focus:outline-none p-2"
        onChange={props.onChange}
        value={props.value}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
};

export default Input;
