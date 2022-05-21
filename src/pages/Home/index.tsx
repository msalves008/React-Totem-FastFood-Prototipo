import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logoDyoLanches_write.png'
import { useCart } from '../../context/useProductIdContext';

import { Container } from './styles';

const Home: React.FC = () => {
  const {setCart} = useCart();
  sessionStorage.clear();
  useEffect(() => {
    /* setCart(null) */
  }, []);

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
