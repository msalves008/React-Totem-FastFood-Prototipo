import React from 'react';
import Hamburgues from '../../components/Hamburgues';
import NavBar from '../../components/NavBar';
import TopBar from '../../components/TopBar';

import { Container } from './styles';

const BaseProducts: React.FC = () => {
  return (
    <Container>
      <div className="topbar-base-product">
        <TopBar/> 
      </div>
      <div className="section-body-base-products">
        <div className="navbar-base-products">
           <NavBar/>
        </div>
        <div className="body-base-products">
          <Hamburgues/>  
        </div>      
      </div>
      <div className="bottom-base-products">
        <div className="bar-options"></div>
        <div className="section-buttons-base">
          <button id='btn-base-product' className="btn-cancel">CANCELAR</button>
          <button id='btn-base-product' className="btn-finish">FINALIZAR</button>
        </div>
      </div>

    </Container>
  );
};

export default BaseProducts;
