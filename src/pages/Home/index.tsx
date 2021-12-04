import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logoDyoLanches_write.png'

import { Container } from './styles';

const Home: React.FC = () => {
  sessionStorage.clear();
  /* document.cookie */
/*   function deleteCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  deleteCookie('connect.sid'); */

  return (
    <Container>
      <Link to={"/consumption"} className="link-newPage">        
        <div className="app-main-content">
          <div className="content">
            <h1 className="title">Evite filas</h1>
            <h2 className="sub-title">Faça  seu pedido aqui!</h2>
            <img src={logo} alt="" />
          </div>
            <div className="mask">
              <h1 className="text-info">Toque na tela para continuar</h1>
            </div>
        </div>
      </Link>
    </Container>
  );
};

export default Home;
