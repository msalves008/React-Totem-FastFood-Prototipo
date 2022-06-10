import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeIcon from "../../assets/close.svg";
import { useContext, useState } from "react";
import { useCart } from "../../context/useProductIdContext";
import { ProductContext } from "../../context/productIdContext";
import { Button } from "@material-ui/core";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AdditinalModal({ isOpen, onRequestClose }: NewModalProps) {
  const { addProduct, updateProductAmount } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);
  const productContext = useContext(ProductContext);

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
        <section className="item-selected">
          <img src={productContext?.product?.image} alt="" />
          <div className="item-details">
            <h1>{productContext.product?.name}</h1>
            <span>R$ {productContext.product?.price}</span>
          </div>
        </section>
        <h1  className="qtd">QUANTIDADE</h1>

        <div className="productQuantilyGroup">
          <span>Selecione a quantidade desejada deste mesmo produto</span>
          <div className="btns">
            <button
              type="button"
              onClick={() => {
                if (productQuantity > 1) {
                  setProductQuantity(productQuantity - 1);
                }
              }}
            >
              -
            </button>
            <h2>{productQuantity}</h2>
            <button
              type="button"
              onClick={() => {
                setProductQuantity(productQuantity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <Button
          type="button"
          variant="outlined"
          size="large"
          color="warning"
          className="btn"
          onClick={() => {
            addProduct(productContext.product?.id, productQuantity);
            updateProductAmount({
              productId: productContext.product?.id,
              amount: productQuantity,
            });
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
