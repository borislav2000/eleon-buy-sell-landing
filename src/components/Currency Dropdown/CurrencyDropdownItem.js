import React, { useContext } from "react";
import ModalContext from "../../store/modal-context";
import { getEstimatePrice, getExchangeRate } from "../../services/rates";
import { formatPrice } from "../../utils/formatting";

const CurrencyDropdownItem = ({ shortName, src, name }) => {
  const modalCtx = useContext(ModalContext);

  const handleSpentCurrencySelected = async () => {
    modalCtx.closeModal();
    modalCtx.chooseSpentCurrency(shortName);
    modalCtx.setSpentCurrencyIconHandler(src);

    const estimatePriceData = await getEstimatePrice(
      shortName,
      modalCtx.receivedCurrency
    );

    const receivedAmountData = await getExchangeRate(
      shortName,
      modalCtx.enteredAmount,
      modalCtx.receivedCurrency
    );

    const estimatedPrice = formatPrice(
      estimatePriceData[modalCtx.receivedCurrency].price
    );

    const receivedAmount = formatPrice(
      receivedAmountData[modalCtx.receivedCurrency].price
    );

    modalCtx.calculateEstimatePrice(estimatedPrice);

    modalCtx.setReceivedAmountHandler(receivedAmount);
  };

  const handleReceivedCurrencySelected = async () => {
    modalCtx.closeModal();
    modalCtx.chooseReceivedCurrency(shortName);
    modalCtx.setReceivedCurrencyIconHandler(src);

    const estimatePriceData = await getEstimatePrice(
      modalCtx.spentCurrency,
      shortName
    );

    const receivedAmountData = await getExchangeRate(
      modalCtx.spentCurrency,
      modalCtx.enteredAmount,
      shortName
    );

    const estimatedPrice = formatPrice(estimatePriceData[shortName].price);
    const receivedAmount = formatPrice(receivedAmountData[shortName].price);

    modalCtx.calculateEstimatePrice(estimatedPrice);
    modalCtx.setReceivedAmountHandler(receivedAmount);
  };

  const selectCurrencyHandler = async () => {
    if (modalCtx.modalType === "spent") {
      await handleSpentCurrencySelected();
    } else {
      await handleReceivedCurrencySelected();
    }
  };

  return (
    <li
      className=" cursor-pointer flex items-center p-2 text-sm hover:bg-[#e5e7eb] gap-3"
      onClick={selectCurrencyHandler}
    >
      <img src={src} alt={name} className="w-8" />
      <div className="flex flex-col font-inter ">
        <span>{shortName}</span>
        <span>{name}</span>
      </div>
    </li>
  );
};

export default CurrencyDropdownItem;
