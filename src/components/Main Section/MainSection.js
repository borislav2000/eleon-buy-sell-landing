import React from "react";

import Section from "../UI/Section";
import SwapCalculator from "../Swap Calculator/SwapCalculator";

import {
  StyledCTAContainer,
  StyledHeadingContainer,
  StyledSectionTextContainer,
  StyledButton,
} from "./elements";

import { StyledSectionHeading } from "./../Typography/Тypography";

import SectionDescription from "../UI/SectionDescription";

const MainSection = () => {
  return (
    <Section
      className="px-6 py-16 xl:flex-row xl:justify-between"
      grayBg={true}
    >
      <StyledSectionTextContainer>
        <StyledHeadingContainer>
          <StyledSectionHeading className="font-inter font-semibold text-3xl text-center sm:text-4xl md:text-5xl xl:text-start xl:leading-tight ">
            <span className="text-gold">Buy and Sell</span> digital currencies
            with one click
          </StyledSectionHeading>
        </StyledHeadingContainer>

        <SectionDescription
          className="font-inter font-normal text-base lg:text-xl lg:w-2/3"
          descriptionText="Our exchange makes it simple to research the crypto market, buy bitcoin and other cryptos, and build 
          a portfolio for the future of money."
        />

        <StyledCTAContainer>
          <StyledButton
            className="font-inter font-medium bg-test rounded-md px-5 py-3 w-32 sm:w-1/3 inline-block text-center"
            href="https://eleon.io"
            buttonText="Buy and sell crypto"
          >
            Buy and sell crypto
          </StyledButton>
        </StyledCTAContainer>
      </StyledSectionTextContainer>
      <SwapCalculator />
    </Section>
  );
};

export default MainSection;
