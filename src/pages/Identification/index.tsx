import React from 'react';
import { useHistory } from 'react-router-dom';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


import { Container } from './styles';

const Identification: React.FC = () => {
  const history = useHistory();
  function handleGoToPayment(){
    history.push("/pixpayment");
  }
  return (
    <Container>
      <div className="main-context-identification">
        <div className="section-identification">
          <h1 className="identification-title">IDENTICAÇÃO</h1>
          <form action="submit"  className="form-identification" >
            <div className="style-div-label">
             <label className='label-identification'>DIGITE SEU CPF:</label>
            </div>
            <input className="input-identification" type="text"></input>
            <p></p>
            <div className="style-div-label">
              <label className='label-identification'>DIGITE SEU NOME:</label>
            </div>
            <input className="input-identification" type="text"></input>

            <button className="btn-comfirm" onClick={handleGoToPayment}>Confirmar</button>
          </form>
        </div>
      
      </div>
    </Container>
  );
};

export default Identification;
