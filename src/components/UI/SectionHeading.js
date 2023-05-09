import React from "react";

const SectionHeading = (props) => {
  return (
    <div className={props.className}>
      <p className="font-inter font-semibold text-2xl text-center md:text-[40px] lg:text-5xl">
        {props.children}
      </p>
    </div>
  );
};

export default SectionHeading;
