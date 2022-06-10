import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import { Container } from "./styles";
/* import spinnerIcon from '../../../assets/spinner.gif' */
import { Box, Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useCart } from "../../../context/useProductIdContext";
const PixPayment: React.FC = () => {
  const { cart } = useCart();
  const history = useHistory();
  const [orderTotalValue, setOrderTotalValue] = useState(0);
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
          items: cart.map((item) => {
            return {
              name: item.name,
              price: item.price,
              quantity: item.amount,
            };
          }),
        },
        { headers }
      )
      .then((response) => {
        setImgQRCode(response.data.qrcode.imagemQrcode);
      });
    return response;
  }
  const [imgQRCode, setImgQRCode] = useState("");
  function handleVerifyValuesAmount() {
    if (!(cart.length > 0)) {
      history.push("/list-products");
    }
  }
  async function handleOrderTotalValue() {
    let totalValue = 0;
    await cart.map((product) => {
      totalValue += Number(product.price) * product.amount;
    });
    setOrderTotalValue(totalValue);
  }
 
  useEffect(() => {
    handleVerifyValuesAmount();
    handleOrderTotalValue();
    postPixPayment(orderTotalValue);
  }, []);

  if (!imgQRCode) {
    return (
      <div className="spinning-loading">
        <CircularProgress />
      </div>
    );
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
              {orderTotalValue.toFixed(2).replace(".", ",")}
            </h2>
          </div>
        </div>
        <Button
          className="btn"
          variant="contained"
          onClick={() => {
            history.push("/satisfactionsurvey");
          }}
        >
          Aprovar Pagameto
        </Button>
      </div>
    </Container>
  );
};

export default PixPayment;
