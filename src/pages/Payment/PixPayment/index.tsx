import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { Container } from "./styles";
/* import spinnerIcon from '../../../assets/spinner.gif' */
import {CircularProgress} from "@material-ui/core";
import { useHistory } from "react-router-dom";
const PixPayment: React.FC = () => {

  const history = useHistory();
  function generatePassworld(){
    history.push('/password');

  }

  function postPixPayment(value: any) {
    /* console.log(`value: ${value}`); */
    const body = { value: value };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const response = axios
      .post("https://peaceful-garden-02489.herokuapp.com/", body, { headers })
      .then((response) => {
        /*  console.log(response.data); */
        setImgQRCode(response.data);
      });
    return response;
  }
  const [imgQRCode, setImgQRCode] = useState("");

  useEffect(() => {
     postPixPayment(sessionStorage.getItem('amountOrder'));     
    return () => {
      console.log("cleanup");
    };
  }, []);


  if (!imgQRCode) {
    return <CircularProgress />

   /*  return <img src={spinnerIcon} alt="Icon Spinner" className="spinnerIcon" />; */
  }

  return (
    <Container>
      <div className="topBar">
        <TopBar />
      </div>
      <div className="Content">
        <h1>
          ESCANIE O QR CODE ABAIXO
          <br />
          PARA REALIZAR O PAGAMENTO
        </h1>
        <img src={imgQRCode} alt="Payment PIX QR Code" />
        <div className="receiver">
          <h2>RECEBEDOR:</h2>
          <h2 className="receiverName">DYOTECH BURGERS</h2>
        </div>
        <div className="amount">
          <h2>TOTAL:</h2>
          <div className="amountValue">
            <span>R$ </span>
          <h2 className="receiverName">{sessionStorage.getItem('amountOrder')}</h2>
          </div>
        </div>        
      
      </div>
      <button className="btnPayment" onClick={generatePassworld}>Aprovar Pagameto</button>
    </Container>
  );
};

export default PixPayment;
