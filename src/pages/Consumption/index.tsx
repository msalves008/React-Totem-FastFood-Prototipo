import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { Container } from './styles';

const Consumption: React.FC = () => {
  
  const history = useHistory();

  const handleEatHere = useCallback(() => history.push('/list-products'), [history]);
  function eatHere(){
    handleEatHere();
    localStorage.setItem('Consumption','eat-here');
    
    // test add object in localStorage
    const localStorageContent = localStorage.getItem('names')
    let names;
    if (localStorageContent === null){
      names = []
    }else{
      names = JSON.parse(localStorageContent);
    }

    names.push('matheus')
    names.push('daniel')
    names.push('maria')
    names.push('carlos')
    localStorage.setItem('names', JSON.stringify(names))
    //finish test
  }
  
  const handleEatOut = useCallback(() => history.push('/list-products'), [history]);
  
  function eatOut(){
    handleEatOut()
    localStorage.setItem('Consumption','eat-out');
    
  }

  

  return (
    <Container>
      <div className="consuption-container">
        <div className="data-container">
          <h1 className="consuption-title">FORMA DE CONSUMO</h1>
          <div className="consuption-masks">
            <button className="button-mask-element" onClick={() => eatHere()}>
              <div className="eat-container">
                <h1 className="title-button">Comer aqui</h1>
                <div className="icontbn"></div>
              </div>
            </button>
            <button className="button-mask-element" onClick={() => eatOut()}>
              <div className="eat-container">
                <h1 className="title-button">Para viagem</h1>
                <div className="icontbn-out"></div>
              </div>
            </button>
        
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Consumption;
