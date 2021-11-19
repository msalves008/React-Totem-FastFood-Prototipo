import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeIcon from "../../assets/close.svg";
import { useContext, useState } from "react";
import { ProductIdContext } from "../../context/useProductIdContext";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
function addItemInSectionStorage(id: any, productQuantity: number) {
  const Item = {
    id: id,
    quantity: productQuantity,
  };
  const sessionStorageContent = sessionStorage.getItem("itemsSelects");
  let itemsSelects;
  if (sessionStorageContent === null) {
    itemsSelects = [];
  } else {
    itemsSelects = JSON.parse(sessionStorageContent);
  }
  itemsSelects.push(Item);
  sessionStorage.setItem("itemsSelects", JSON.stringify(itemsSelects));
 
}

export function AdditinalModal({ isOpen, onRequestClose }: NewModalProps) {
  const productContext = useContext(ProductIdContext);
  const [productQuantity, setProductQuantity] = useState(1);
  
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
        <h1>ADICIONAIS</h1>
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
        </div>
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

        <button
          type="button"
          className="btn"
          onClick={() => {
            if (productContext) {
              addItemInSectionStorage(
                productContext.productId?.productId,
                productQuantity
              );
            }
            onRequestClose();
            setProductQuantity(1);
          }}
        >
          CONFIRMAR
        </button>
      </Container>
    </Modal>
  );
}
