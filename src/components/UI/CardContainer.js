import React from "react";

const CardContainer = (props) => {
  return (
    <div
      className={`bg-[#fff] rounded-[20px] flex flex-col relative shadow-3xl mt-10 items-center justify-center p-8 h-full text-center ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
