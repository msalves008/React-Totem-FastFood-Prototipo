import React, { useState } from "react";
import { Hamburgues } from "../../components/Hamburgues";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import cartIcon from "../../assets/cart.svg";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";

import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import ProductIdProvider from "../../context/useProductIdContext";

Modal.setAppElement("#root");
export function BaseProducts() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <div className="topbar-base-product">
        <TopBar />
      </div>
      <div className="section-body-base-products">
        <div className="navbar-base-products">
          <NavBar />
        </div>
        <div className="body-base-products">
          <ProductIdProvider>
            <AdditinalModal
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal}
            />
            <Hamburgues onOpenNewModal={handleOpenNewTransactionModal} />
          </ProductIdProvider>
        </div>
      </div>
      <div className="bottom-base-products">
        <div className="bar-options">
          <div className="value">
            <h1>TOTAL</h1>
            <div>
              <span>R$</span>
              <h1>0,00</h1>
            </div>
          </div>
          <div className="cart">
            <button>
              <img src={cartIcon} alt="Carinho de Compras" />
              <span>0</span>
            </button>
          </div>
        </div>
        <div className="section-buttons-base">
          <button id="btn-base-product" className="btn-cancel">
            CANCELAR
          </button>
          <button id="btn-base-product" className="btn-finish">
            FINALIZAR
          </button>
        </div>
      </div>
      <GlobalStyles />
    </Container>
  );
}

export default BaseProducts;
