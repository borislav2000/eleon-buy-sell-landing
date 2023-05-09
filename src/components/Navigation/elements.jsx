import React from "react";
import Button from "../UI/Button";
import { HashLink as Link } from "react-router-hash-link";

const StyledHeader = (props) => {
  return (
    <header className="bg-[#f4f2ed] w-full sticky top-0 z-10">
      {props.children}
    </header>
  );
};

const StyledHeaderContainer = (props) => {
  return (
    <div className="flex mx-auto h-20 max-w-[1440px] items-center gap-8 px-6 sm:px-8 justify-between">
      {props.children}
    </div>
  );
};

const StyledHeaderImage = (props) => {
  return <img src={props.src} alt={props.alt} width={props.width} />;
};

const StyledNavigationLinks = (props) => {
  return (
    <div
      className={`md:flex md:flex-1 md:justify-center md:items-center ${props.className}`}
    >
      <nav>
        <ul className="flex items-center gap-10 font-inter text-md font-medium">
          <Link smooth to="#profits">
            Profits
          </Link>
          <Link smooth to="#crypto">
            Cryptocurrencies
          </Link>

          <Link smooth to="#contact">
            Contact Us
          </Link>
        </ul>
      </nav>
    </div>
  );
};

const StyledBurgerMenuNavigationLinks = (props) => {
  return (
    <div className={`md:flex md:flex-1 md:justify-center md:items-center`}>
      <nav className="flex flex-col">
        <ul className="flex flex-col items-center gap-7 font-inter text-lg font-medium">
          <li className="hover:text-gold">
            <a href="#benefits-section">Profits</a>
          </li>
          <li className="hover:text-gold">
            <a href="/">Cryptocurrencies</a>
          </li>
          <li className="hover:text-gold">
            <a href="/">Contact Us</a>
          </li>

          <StyledButton
            className="font-inter font-medium bg-test rounded-md px-5 py-3 "
            buttonText="Buy and sell"
            href="https://www.eleon.io/"
          />
        </ul>
      </nav>
    </div>
  );
};
const StyledButton = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <Button>{props.buttonText}</Button>
    </a>
  );
};
const StyledCTAContainer = (props) => {
  return <div className="whitespace-nowrap">{props.children}</div>;
};

export {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderImage,
  StyledNavigationLinks,
  StyledCTAContainer,
  StyledBurgerMenuNavigationLinks,
  StyledButton,
};
