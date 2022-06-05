import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeIcon from "../../assets/close.svg";
import { useContext, useState } from "react";
import { useCart } from "../../context/useProductIdContext";
import { ProductIdContext } from "../../context/productIdContext";
import { Button } from "@material-ui/core";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AdditinalModal({ isOpen, onRequestClose }: NewModalProps) {
  const { addProduct, updateProductAmount } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);
  const productIdContext = useContext(ProductIdContext);

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
        {/*         <h1>ADICIONAIS</h1>
        <div className="content">
          <div className="item">
            <h2>HAMBÚRGUER</h2>
            <div className="quantily">
              <button type="button">-</button>
              <h2>0</h2>
              <button type="button">+</button>
            </div>
          </div>

          <div className="item">
            <h2>MOLHO MADEIRA</h2>
            <div className="quantily">
              <button type="button">-</button>
              <h2>0</h2>
              <button type="button">+</button>
            </div>
          </div>

          <div className="item">
            <h2>MAIONESE TEMPERADA</h2>
            <div className="quantily">
              <button type="button">-</button>
              <h2>0</h2>
              <button type="button">+</button>
            </div>
          </div>

          <div className="item">
            <h2>CHEDDAR</h2>
            <div className="quantily">
              <button type="button">-</button>
              <h2>0</h2>
              <button type="button">+</button>
            </div>
          </div>
        </div> */}
        <h1>QUANTIDADE</h1>

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
            addProduct(productIdContext.productId?.productId, productQuantity);
            console.log({
              productId: productIdContext.productId?.productId,
              amount: productQuantity,
            });
            updateProductAmount({
              productId: productIdContext.productId?.productId,
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
