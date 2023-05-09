import React from "react";

const SectionDescription = (props) => {
  return (
    <div className="text-center xl:text-start">
      <p className={props.className}>{props.descriptionText}</p>
    </div>
  );
};

export default SectionDescription;
