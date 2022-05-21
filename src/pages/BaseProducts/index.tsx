import { useState } from "react";
import { ProductList } from "../../components/ProductList";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";
import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import { CategoryProvider } from "../../context/categoryIdContext";
import { CartProvider } from "../../context/useProductIdContext";
import { ProductIdProvider } from "../../context/productIdContext";
import CheckoutSession from "../../components/CheckoutSession";

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
      <ProductIdProvider>
        {/* <CartProvider> */}
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
           <CheckoutSession/>
            <GlobalStyles />
          </CategoryProvider>
       {/*  </CartProvider> */}
      </ProductIdProvider>

      {/*  </ProductIdProvider> */}
    </Container>
  );
}

export default BaseProducts;
