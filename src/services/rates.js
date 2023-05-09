import axios from "axios";

export const getEstimatePrice = async (
  selectedSpentCurrency,
  selectedReceivedCurrency
) => {
  try {
    const response = await axios.get("/estimate-price", {
      params: {
        symbol: selectedSpentCurrency,
        convert: selectedReceivedCurrency,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch estimate price data!");
  }
};

export const getExchangeRate = async (
  selectedSpentCurrency,
  enteredAmount,

  selectedReceivedCurrency
) => {
  try {
    const response = await axios.get("/rate", {
      params: {
        symbol: selectedSpentCurrency,
        amount: enteredAmount,
        convert: selectedReceivedCurrency,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch exchange rate data!");
  }
};
