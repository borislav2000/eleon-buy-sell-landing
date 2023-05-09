import React, { useState } from "react";

import {
  StyledCTAContainer,
  StyledBurgerMenuNavigationLinks,
  StyledButton,
} from "./elements";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined
        style={{ fontSize: "16px" }}
        className="md:hidden"
        onClick={showDrawer}
      />
      <Drawer
        placement={"right"}
        width={350}
        onClose={onClose}
        open={open}
        drawerStyle={{ backgroundColor: `#F4F2ED`, border: "none" }}
      >
        <StyledBurgerMenuNavigationLinks />
      </Drawer>
    </>
  );
};

const NavAction = () => {
  return (
    <StyledCTAContainer>
      <StyledButton
        className="hidden md:block font-inter font-medium bg-test rounded-md px-5 py-3 "
        buttonText="Buy and sell"
        href="https://www.eleon.io/"
      ></StyledButton>
      <NavigationDrawer />
    </StyledCTAContainer>
  );
};

export default NavAction;
