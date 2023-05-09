import React from "react";
import CardContainer from "./CardContainer";
import ReviewStars from "./../../assets/icons/review-stars.svg";

const Card = (props) => {
  return (
    <>
      <CardContainer>
        <div className="mt-10 ">
          <img
            src={props.items.avatarImage}
            alt="Avatar"
            className="absoulte absolute left-2/4 -top-[40px] w-20 -translate-x-1/2"
          />
        </div>

        <div className="flex flex-col gap-8 items-center">
          <h3 className="font-inter font-medium text-lg">{props.items.name}</h3>
          <p className="font-inter text-sm">{props.items.comment}</p>
          <img src={ReviewStars} alt="Review Stars" className="w-fit" />
        </div>
      </CardContainer>
    </>
  );
};

export default Card;
