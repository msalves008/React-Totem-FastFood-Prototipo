import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { Container } from "./styles";
/* import spinnerIcon from '../../../assets/spinner.gif' */
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useCart } from "../../../context/useProductIdContext";
const PixPayment: React.FC = () => {
  const {cart} = useCart();
  const history = useHistory();
  function generatePassworld() {
    history.push("/password");
  }

  /* 
  [
            {
              quantity: 1,
              price: value,
              name: "pedido",
            },
          ],
  */
  function postPixPayment(value: any) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const response = axios
      .post(
        "https://pixpayment.dyotech.com.br/create-order",
        {
          cpf: sessionStorage.getItem("documentNumber"),
          nome: sessionStorage.getItem("name"),
          telefone: "",
          items: cart.map((item)=>{
            return {
              name: item.name,
              price: item.price,
              quantity: item.amount,
            }
          })
        },
        { headers }
      )
      .then((response) => {
        /*  console.log(response.data); */
        setImgQRCode(response.data.qrcode.imagemQrcode);
      });
    return response;
  }
  const [imgQRCode, setImgQRCode] = useState("");

  useEffect(() => {
    postPixPayment(
      Number(sessionStorage.getItem("amountOrder")).toFixed(2)
    );
  }, []);

  if (!imgQRCode) {
    return <CircularProgress />;

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
            <h2 className="receiverName">
              {sessionStorage.getItem("amountOrder")}
            </h2>
          </div>
        </div>
      </div>
      <button className="btnPayment" onClick={generatePassworld}>
        Aprovar Pagameto
      </button>
    </Container>
  );
};

export default PixPayment;
