import axios from 'axios';
import React from 'react';
import TopBar from '../../../components/TopBar';
import { useRequest } from '../../../hooks/useRequest';
import { Container } from './styles';

const PixPayment: React.FC = () => {

  function  postPixPayment(value: any){
    console.log(`value: ${value}`);
    const body = { value: value };
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'  
    };
    //axios.post('https://peaceful-garden-02489.herokuapp.com/',body,{headers})
    const data = axios.post('http://localhost:8000/',body,{headers})
      .then(data => {
        console.log(data);
      })      
      return data; 
  }

  const data = postPixPayment(0.09);

  /* const data = useRequest('https://peaceful-garden-02489.herokuapp.com/'); */
  if(!data){
    return <div>Carregando...</div>
  }

    return (
    <Container>
      <div className="topBar">
        <TopBar/>
      </div>
      <div className="Content">
        <h1>ESCANIE O QR CODE ABAIXO<br/>PARA REALIZAR O PAGAMENTO</h1>
        <img src="data:image/png;base64,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" alt="" />
        {/* <img src={data} alt="" />   */}    
      </div>

    </Container>
  );
};

export default PixPayment;
