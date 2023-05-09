import React from "react";
import Section from "../UI/Section";

import {
  StyledHeadingContainer,
  StyledSectionHeading,
  StyledProfitsContainer,
  StyledProfitsCard,
} from "./elements";

import lowFeeImage from "./../../assets/images/low-fee.png";
import secureExchangeImage from "./../../assets/images/secure-exchange.png";

const ProftisSection = () => {
  return (
    <Section className="flex px-6 py-24  xl:justify-between" id="profits">
      <StyledHeadingContainer>
        <StyledSectionHeading
          paragraphClassName="font-inter font-semibold text-2xl text-center md:text-[40px] lg:text-4xl text-[#151A1C]"
          text="The exchange has never been "
          spanText="more profitable"
          spanClassName="text-gold"
        />
      </StyledHeadingContainer>
      <StyledProfitsContainer>
        <StyledProfitsCard
          src={lowFeeImage}
          alt="Low Fee Icon"
          cardHeading="Lowest Fees"
          cardDescription="Our platform gives you the possibility to exchange crypto 
and pay the lowest rate ever."
        />
        <StyledProfitsCard
          src={secureExchangeImage}
          alt="Secure Exchange Icon "
          cardHeading="Secure exchange"
          cardDescription="With Eleon you don’t have to worry about getting your data exposed, we have multiple levels of protection for your data."
        />
      </StyledProfitsContainer>
    </Section>
  );
};

export default ProftisSection;
