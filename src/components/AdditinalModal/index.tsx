import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeIcon from "../../assets/close.svg";
import { useContext, useState } from "react";
import { useCart } from "../../context/useProductIdContext";
import { ProductContext } from "../../context/productIdContext";
import { Button } from "@material-ui/core";
import { QuantitySelectorButton } from "./QuantitySelectorButton";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AdditinalModal({ isOpen, onRequestClose }: NewModalProps) {
  const productContext = useContext(ProductContext);
  const [productQuantity, setProductQuantity] = useState(1);
  const { addProduct } = useCart();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>
      <Container>
        <section className="wrapper-header">
          <h3>Product</h3>
        </section>
        <img
          src={productContext?.product?.image}
          alt={productContext?.product?.name}
          className="product-image"
        />
        <section className="wrapper-product-information">
          <h1>{productContext?.product?.name}</h1>
          <div className="dividers">
            <div className="divider-left"></div>
            <div className="divider-right"></div>
          </div>
        </section>
        <section className="wrapper-product-quantity-amount">
          <div className="div">
            <span className="product-quantity">Quantidade</span>
            <QuantitySelectorButton
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
          </div>
          <h1 className="product-unitary-value">
            R${" "}
            {productQuantity === 1
              ? productContext?.product?.price
              : (productContext?.product?.price * productQuantity).toFixed(2)}
          </h1>
        </section>
        <Button
          type="button"
          variant="contained"
          size="large"
          color="warning"
          className="btn"
          onClick={() => {
            addProduct(productContext.product?.id, productQuantity);
            onRequestClose();
            setProductQuantity(1);
          }}
        >
          Adicionar na sacola
        </Button>
      </Container>
    </Modal>
  );
}
