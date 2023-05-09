import React from "react";
import Logo from "../../assets/images/logo.svg";
import { StyledNavigationLinks } from "../Navigation/elements";

const FooterNavigation = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="w-full">
      <div className="flex flex-col gap-7 items-center p-4 w-full lg:flex-row lg:justify-between ">
        <div className="text-center">
          <img src={Logo} alt="Eleon Logo" width={"120px"} />
        </div>

        <StyledNavigationLinks />

        <div className="flex  gap-5 font-inter text-sm">
          <a href="https://eleon.io/gdpr" className="underline">
            Privacy policy
          </a>
          <a href="https://eleon.io/terms-and-conditions" className="underline">
            Terms of service
          </a>
        </div>
      </div>
      <div className="text-center  p-4">
        <p className="font-inter text-sm text-[#868686]">
          &#169; {currentYear}. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterNavigation;
