import React from "react";

const ReviewsContainer = (props) => {
  return (
    <div className="grid grid-cols-1 lg:gap-7 md:flex-row items-center justify-between  w-full mt-16 ">
      {props.children}
    </div>
  );
};

export default ReviewsContainer;
