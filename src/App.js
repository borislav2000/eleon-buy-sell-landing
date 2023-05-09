import React from "react";
import Header from "./components/Navigation/Header";
import MainSection from "./components/Main Section/MainSection";
import ProftisSection from "./components/Profits Section/ProfitsSection";
import CryptocurrenciesSection from "./components/Cryptocurrencies Section/CryptocurrenciesSection";
import ContactSection from "./components/Contact Section/ContactSection";
import FooterSection from "./components/Footer Section/FooterSection";
import ModalProvider from "./store/ModalProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ModalProvider>
        <MainSection />
      </ModalProvider>
      <ProftisSection />
      <CryptocurrenciesSection />
      <ContactSection />
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
