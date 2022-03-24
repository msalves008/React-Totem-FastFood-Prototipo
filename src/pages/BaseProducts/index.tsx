import { useState } from "react";
import { ProductList } from "../../components/ProductList";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import cartIcon from "../../assets/cart.svg";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";
import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CategoryProvider } from "../../context/categoryIdContext";
import { CartProvider } from "../../context/useProductIdContext";
import { ProductIdProvider } from "../../context/productIdContext";

Modal.setAppElement("#root");

export function BaseProducts() {
  const history = useHistory();

  function finshOrder() {
    history.push("/checkout-order");
  }
  function cancelOrder() {
    history.push("/");
  }

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
      <ProductIdProvider>
        <CartProvider>
          <CategoryProvider>
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
                    <h1>{sessionStorage.getItem("amountOrder")}</h1>
                  </div>
                </div>
                <div className="cart">
                  <button>
                    <img src={cartIcon} alt="Carinho de Compras" />
                    <span>{JSON.parse(sessionStorage.getItem("@CleanSystem:cart"))?.length}</span>
                  </button>
                </div>
              </div>
              <div className="section-buttons-base">
                <Button variant="outlined" color="error" onClick={cancelOrder}>
                  CANCELAR
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={finshOrder}
                >
                  FINALIZAR
                </Button>
              </div>
            </div>
            <GlobalStyles />
          </CategoryProvider>
        </CartProvider>
      </ProductIdProvider>

      {/*  </ProductIdProvider> */}
    </Container>
  );
}

export default BaseProducts;
