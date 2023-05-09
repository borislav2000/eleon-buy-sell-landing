import React, { useContext, useState, useMemo } from "react";
import Modal from "../UI/Modal/Modal";
import dropdownData from "./currencyDropdownData";
import CurrencyDropdownItem from "./CurrencyDropdownItem";
import ModalContext from "../../store/modal-context";

const CurrencyDropdown = React.memo(() => {
  const modalCtx = useContext(ModalContext);
  const [searchText, setSearchText] = useState("");

  const filteredCoins = useMemo(
    () =>
      dropdownData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText]
  );

  const inputChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const closeModal = () => {
    modalCtx.closeModal();
  };

  return (
    <Modal>
      <div className="flex flex-col p-3 gap-4">
        <div className="flex items-center justify-between">
          <p className="font-inter font-medium text-2xl">Select Currency</p>
          <div
            onClick={closeModal}
            className=" text-center cursor-pointer shrink-0"
          >
            <p className="text-2xl">&times;</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={inputChangeHandler}
            className="bg-[#f9fafb] p-4 border border-[#d1d5db] w-full rounded-lg"
          />
        </div>
        <div className="relative py-3 px-1 flex-auto">
          <ul className="h-80 bg-white mt-2 overflow-y-auto z-50">
            {filteredCoins.map((item) => (
              <CurrencyDropdownItem
                key={item.id}
                src={item.icon}
                name={item.name}
                shortName={item.shortName}
              />
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
});

export default CurrencyDropdown;
