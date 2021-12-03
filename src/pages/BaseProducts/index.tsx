import React, { useState, useContext } from "react";

import { ProductList } from "../../components/ProductList";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import cartIcon from "../../assets/cart.svg";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";

import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import ProductIdProvider, {
  ProductIdContext,
} from "../../context/useProductIdContext";
import {  useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

Modal.setAppElement("#root");

export function BaseProducts() {
  const history = useHistory();
  function finshOrder(){
    history.push("/checkout-order");
  }



  const productContext = useContext(ProductIdContext);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  /* 
  let cart;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cart = productContext?.cartQuantity?.cartQuantity;

  }); */

  return (
    <Container>
      <ProductIdProvider>
        <div className="topbar-base-product">
          <TopBar />
        </div>
        <div className="section-body-base-products">
          <div className="navbar-base-products">
            <NavBar />
          </div>
          <div className="body-base-products">
            <AdditinalModal
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal}
            />
            <ProductList onOpenNewModal={handleOpenNewTransactionModal} />
          </div>
        </div>
        <div className="bottom-base-products">
          <div className="bar-options">
            <div className="value">
              <h1>TOTAL</h1>
              <div>
                <span>R$</span>
                <h1>{productContext?.amountOrder}</h1>
              </div>
            </div>
            <div className="cart">
              <button>
                <img src={cartIcon} alt="Carinho de Compras" />
                <span>{ sessionStorage.getItem("cartQuantility")}</span>
              </button>
            </div>
          </div>
          <div className="section-buttons-base">
            <Button variant="outlined" color="error">
              CANCELAR
            </Button>
              <Button variant="contained" color="success" onClick={finshOrder}>
                FINALIZAR
              </Button>
            
          </div>
        </div>
        <GlobalStyles />
      </ProductIdProvider>
    </Container>
  );
}

export default BaseProducts;
