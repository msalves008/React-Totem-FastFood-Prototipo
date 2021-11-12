import React, { useCallback } from 'react';
import promoIcon from './../../assets/promo.png'
import comboIcon from './../../assets/combo.png'
import hamburguerIcon from './../../assets/Hamburguer.png'
import bebidasIcon from './../../assets/Bebidas.png'
import sundaeIcon from './../../assets/Sundae.png'

import { Container } from './styles';
import { useHistory } from 'react-router-dom';


const NavBar: React.FC = () => {

  const history = useHistory();

  const handleCombos = useCallback(() => history.push('/list-products-combos'), [history]);
  function opemNewModal(){
    alert('a')
    handleCombos();
  }

  const data = [
    {
      id: '1',
      img: promoIcon,
      rout: handleCombos
    },
    {
      id: '2',
      img: comboIcon,
      rout: ''
    },
    {
      id:'3',
      img: hamburguerIcon,
      rout: ''
    },
    {
      id:'4',
      img: bebidasIcon,
      rout: ''
    },
    {
      id:'5',
      img: sundaeIcon,
      rout: ''
    }
  ]
  
  return (
    <Container>
      <div className="main-navbar"> 
        {data.map((d)=>(
              <button className="base-navbar" onClick={() => opemNewModal()} key={d.id}>
                <div className="item-navbar" >
                  <img src={d.img} alt="" className="icon" />
                </div>
              </button>      
        ))}         
      </div>
    </Container>
  );
};

export default NavBar;
