import React from "react";
import Section from "../UI/Section";
import {
  StyledHeadingContainer,
  StyledSectionHeading,
  StyledCryptosContainer,
  StyledCryptoItems,
  StyledButton,
} from "./elements";

const CryptocurrenciesSection = (props) => {
  return (
    <Section
      className="flex px-6 py-24  xl:justify-between "
      grayBg={true}
      id="crypto"
    >
      <StyledHeadingContainer>
        <StyledSectionHeading
          paragraphClassName="font-inter font-semibold text-2xl text-center md:text-[40px] lg:text-4xl text-[#151A1C]"
          text="Choose from over "
          spanText="20 cryptocurrencies"
          spanClassName="text-gold"
        />
      </StyledHeadingContainer>
      <StyledCryptosContainer>
        <StyledCryptoItems />
      </StyledCryptosContainer>
      <StyledButton
        className="flex font-inter font-medium bg-test rounded-md px-5 py-3 "
        buttonText="Buy crypto"
        href="https://www.eleon.io/"
      ></StyledButton>
    </Section>
  );
};

export default CryptocurrenciesSection;
