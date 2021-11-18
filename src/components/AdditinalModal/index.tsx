import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import closeIcon from "../../assets/close.svg";

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function AdditinalModal({ isOpen, onRequestClose }: NewModalProps) {

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

        <button type="button" className="btn" onClick={onRequestClose}>CONFIRMAR</button>
      </Container>
    </Modal>
  );
}
