import React from "react";
import Section from "../UI/Section";

import "react-phone-input-2/lib/style.css";

import FooterNavigation from "./FooterNavigation";

const FooterSection = (props) => {
  return (
    <Section
      className=" px-6 mt-16 md:mt-[100px] xl:mt-36 xl:justify-between "
      grayBg={true}
    >
      <FooterNavigation />
    </Section>
  );
};

export default FooterSection;
