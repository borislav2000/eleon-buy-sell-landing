import React from "react";
import logo from "../../assets/images/logo.svg";
import NavAction from "./NavAction";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledNavigationLinks,
} from "./elements";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledHeaderImage src={logo} alt="Eleon Logo" width="170px" />
        <StyledNavigationLinks className="hidden" />
        <NavAction />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
