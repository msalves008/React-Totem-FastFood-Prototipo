import React from 'react';
import {Link} from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to={"/consumption"} className="link-newPage">        
        <div className="app-main-content">
          <div className="content">
            <h1 className="title">Evite filas</h1>
            <h2 className="sub-title">Faça  seu pedido aqui!</h2>
            <div className="logo"></div>
            <div className="mask">
              <h1 className="text-info">Toque na tela para continuar</h1>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default Home;
