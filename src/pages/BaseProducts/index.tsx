import { useState } from "react";
import { ProductList } from "../../components/ProductList";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";
import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import { CategoryProvider } from "../../context/categoryIdContext";
import { ProductIdProvider } from "../../context/productIdContext";
import TopBarCheckoutSession from "../../components/TopBarCheckout";

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
        <CategoryProvider>
          <header>
            <TopBarCheckoutSession />
          </header>
          <aside>
            <NavBar />
          </aside>
          <section>
            <AdditinalModal
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal}
            />
            <ProductList onOpenNewModal={handleOpenNewTransactionModal} />
          </section>
        </CategoryProvider>
      </ProductIdProvider>
      <GlobalStyles />
    </Container>
  );
}

export default BaseProducts;
