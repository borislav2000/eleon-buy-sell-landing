import React, { useContext } from "react";

import { getExchangeRate } from "../../services/rates";
import { formatPrice } from "../../utils/formatting";

import "./styles.css";
import swapIcon from "./../../assets/icons/swap-icon.png";

import {
  StyledCalculatorContainer,
  StyledCalculatorContentContainer,
  StyledCalculatorHeaderContainer,
  StyledCalculatorHeading,
  StyledCalculatorInputContainer,
  StyledCalculatorInput,
  StyledCalculatorDescriptiveTextContainer,
  StyledCalculatorDescrptiveText,
  StyledDropdownButton,
  StyledButton,
} from "./elements";

import ModalContext from "../../store/modal-context";

import CurrencyDropdown from "../Currency Dropdown/CurrencyDropdown";

const SwapCalculator = () => {
  const modalCtx = useContext(ModalContext);

  const openSpentCurrencyModal = () => {
    modalCtx.openModal();
    modalCtx.setModalType("spent");
  };

  const openReceivedCurrencyModal = () => {
    modalCtx.openModal();
    modalCtx.setModalType("received");
  };

  const handleAmountChange = async (event) => {
    let inputAmount = event.target.value || 1;

    const receivedAmountData = await getExchangeRate(
      modalCtx.spentCurrency,
      inputAmount,
      modalCtx.receivedCurrency
    );

    const receivedAmount = formatPrice(
      receivedAmountData[modalCtx.receivedCurrency].price
    );

    modalCtx.setEnteredAmountHandler(inputAmount);
    modalCtx.setReceivedAmountHandler(receivedAmount);
  };

  return (
    <StyledCalculatorContainer>
      <StyledCalculatorContentContainer>
        <StyledCalculatorHeaderContainer>
          <StyledCalculatorHeading heading="Swap" />
        </StyledCalculatorHeaderContainer>
        <StyledCalculatorInputContainer>
          <StyledCalculatorInput
            name="number"
            labelText="Spend"
            type="number"
            placeholderText="0"
            onChange={handleAmountChange}
          />{" "}
          <StyledDropdownButton
            onClick={openSpentCurrencyModal}
            coinIcon={modalCtx.spentCurrencyIcon}
            coinName={modalCtx.spentCurrency}
          />
          {modalCtx.isModalOpen && <CurrencyDropdown />}
        </StyledCalculatorInputContainer>

        <StyledCalculatorInputContainer>
          <img
            src={swapIcon}
            alt="Swap Icon"
            className="absolute -top-[30px] left-2/4 -translate-x-1/2"
          />
          <StyledCalculatorInput
            name="number"
            labelText="Receive"
            type="number"
            placeholderText="0.0"
            readOnly={true}
            value={modalCtx.receivedAmount}
          />
          <StyledDropdownButton
            onClick={openReceivedCurrencyModal}
            coinIcon={modalCtx.receivedCurrencyIcon}
            coinName={modalCtx.receivedCurrency}
          />
          {modalCtx.isModalOpen && <CurrencyDropdown />}
        </StyledCalculatorInputContainer>
        <StyledCalculatorDescriptiveTextContainer>
          <StyledCalculatorDescrptiveText
            paragraphClassName="font-inter text-sm font-medium text-[#828282]"
            text="Estimate price: "
            spanText={`1 ${modalCtx.spentCurrency} = ${modalCtx.estimatePrice} ${modalCtx.receivedCurrency}`}
            spanClassName="text-[#151A1C]"
          ></StyledCalculatorDescrptiveText>
        </StyledCalculatorDescriptiveTextContainer>
        <StyledCalculatorDescriptiveTextContainer>
          <StyledButton
            href="https://www.eleon.io/"
            buttonText="Sign up/Sign in"
            className="bg-gold w-full py-3 font-inter text-[#fff] rounded inline-block"
          ></StyledButton>
        </StyledCalculatorDescriptiveTextContainer>
        <StyledCalculatorDescriptiveTextContainer>
          <p className="font-inter text-sm font-medium text-[#151A1C]">
            By using Eleon you're agree to the{" "}
            <a
              href="https://www.eleon.io/terms-and-conditions"
              className="text-gold"
            >
              Terms and Conditions
            </a>
          </p>
        </StyledCalculatorDescriptiveTextContainer>
      </StyledCalculatorContentContainer>
    </StyledCalculatorContainer>
  );
};

export default SwapCalculator;
