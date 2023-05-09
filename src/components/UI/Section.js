import React from "react";

const Section = (props) => {
  return (
    <section className={props.grayBg ? "bg-[#f4f2ed]" : ""}>
      <div
        className={`container flex flex-col mx-auto justify-center max-w-[1440px] gap-10 items-center ${props.className}`}
        id={props.id}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;
