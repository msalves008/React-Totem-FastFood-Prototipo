import { useContext, useEffect, useState } from "react";
import { ProductList } from "../../components/ProductList";
import { NavBar } from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import { AdditinalModal } from "./../../components/AdditinalModal";
import Modal from "react-modal";
import { Container } from "./styles";
import { GlobalStyles } from "../../style/global";
import { CategoryProvider,CategoryContext } from "../../context/categoryIdContext";
import { ProductProvider } from "../../context/productIdContext";
import TopBarCheckoutSession from "../../components/TopBarCheckout";

Modal.setAppElement("#root");

export function BaseProducts() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
    const categoryContext = useContext(CategoryContext);
    
 
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <ProductProvider>
        <CategoryProvider>
          <header>
            <TopBarCheckoutSession showTotalValue={true} />
          </header>
          <aside>
            <NavBar />
          </aside>
          <section>
            <AdditinalModal
              isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModal}
            />
            <ProductList
              onOpenNewModal={handleOpenNewTransactionModal}
              categoryId={categoryContext?.categoryId?.categoryId}
            />
          </section>
        </CategoryProvider>
      </ProductProvider>
      <GlobalStyles />
    </Container>
  );
}

export default BaseProducts;
