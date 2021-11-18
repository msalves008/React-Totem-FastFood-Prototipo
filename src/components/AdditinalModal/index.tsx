import React from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import closeIcon from '../../assets/close.svg'

interface NewModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
export function AdditinalModal({isOpen, onRequestClose}: NewModalProps){ 
  return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay' 
        className="react-modal-content"
      >
         <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeIcon} alt="Fechar Modal"/>
          </button>
        <h1>I'm a Modal, hehehehhe</h1>
      </Modal>      
 
  );
};