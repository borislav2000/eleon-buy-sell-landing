import React, { useState } from "react";
import ModalContext from "./modal-context";
import dropdownData from "../components/Currency Dropdown/currencyDropdownData";

const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [spentCurrency, setSpentCurrency] = useState("BTC");
  const [receivedCurrency, setReceivedCurrency] = useState("USDT");
  const [estimatePrice, setEstimatePrice] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [enteredAmount, setEnteredAmount] = useState(1);
  const [spentCurrencyIcon, setSpentCurrencyIcon] = useState(
    dropdownData[0].icon
  );
  const [receivedCurrencyIcon, setReceivedCurrencyIcon] = useState(
    dropdownData[2].icon
  );

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const chooseSpentCurrency = (currency) => {
    setSpentCurrency(currency);
  };
  const chooseReceivedCurrency = (currency) => {
    setReceivedCurrency(currency);
  };

  const calculateEstimatePrice = (price) => {
    setEstimatePrice(price);
  };

  const setReceivedAmountHandler = (amount) => {
    setReceivedAmount(amount);
  };

  const setEnteredAmountHandler = (amount) => {
    setEnteredAmount(amount);
  };

  const setSpentCurrencyIconHandler = (icon) => {
    setSpentCurrencyIcon(icon);
  };

  const setReceivedCurrencyIconHandler = (icon) => {
    setReceivedCurrencyIcon(icon);
  };

  const modalContext = {
    isModalOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
    modalType,
    setModalType,
    spentCurrency,
    chooseSpentCurrency,
    receivedCurrency,
    chooseReceivedCurrency,
    estimatePrice,
    calculateEstimatePrice,
    receivedAmount,
    setReceivedAmountHandler,
    enteredAmount,
    setEnteredAmountHandler,
    spentCurrencyIcon,
    setSpentCurrencyIconHandler,
    receivedCurrencyIcon,
    setReceivedCurrencyIconHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
