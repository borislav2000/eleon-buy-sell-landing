import React from "react";

const ModalContext = React.createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  choice: "BTC",
});

export default ModalContext;
