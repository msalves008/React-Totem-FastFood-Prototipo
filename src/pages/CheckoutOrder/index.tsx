import React, { useEffect } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { useCart } from "../../context/useProductIdContext";
import TopBarCheckoutSession from "../../components/TopBarCheckout";
import { Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const CheckoutOrder: React.FC = () => {
  const { cart, removeProduct } = useCart();
  const history = useHistory();

  useEffect(() => {
    handleVerifyValuesAmount();
  }, []);
  useEffect(() => {
    handleVerifyValuesAmount();
  }, [cart]);

  function handleVerifyValuesAmount() {
    if (!(Number(sessionStorage.getItem("amountOrder")) > 0)) {
      history.push("/list-products");
    }
  }
  function checkoutOrder() {
    history.push("/identification");
  }
  if (!cart) {
    return <></>;
  }

  console.log(Number(sessionStorage.getItem("amountOrder")));
  return (
    <Container>
      <section className="modal">
        <TopBarCheckoutSession showTotalValue={false} />
        <div className="modal-header">
          <h1 className="modal-title">CONFIRME SEU PEDIDO</h1>
        </div>
        <div className="items">
          {cart?.map((row, index) => (
            <div className="item" key={index}>
              <img
                src={row.image}
                alt="Nike Paul George 2 Masculino"
                className="Item-image"
              />
              <div className="item-info">
                <h3>{row.name}</h3>
                <span> QTD: {row.amount}</span>
              </div>
              <div>
                <span className="item-value">R$ {row.price}</span>
                <IconButton
                  aria-label="delete"
                  style={{ marginLeft: "20px", color: "red" }}
                  onClick={() => removeProduct(row.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="resume">
          <h1>Resumo do Pedido</h1>
          <div className="resume-itens">
            <div className="resume-item">
              <span>Total de Pedidos</span>
              <span>
                R$:{" "}
                {Number(sessionStorage.getItem("amountOrder"))
                  .toFixed(2)
                  .replace(".", ",")}
              </span>
            </div>
            <div className="resume-item">
              <span>Descontos</span>
              <span>R$: 00,00</span>
            </div>
            <div className="divider"></div>
            <div className="amount">
              <span>Total</span>
              <span>
                {" "}
                R$:{" "}
                {Number(sessionStorage.getItem("amountOrder"))
                  .toFixed(2)
                  .replace(".", ",")}
              </span>
            </div>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={checkoutOrder}
              className="btn-checkout"
              disabled={Number(sessionStorage.getItem("amountOrder")) === 0}
            >
              CONFIRMAR
            </Button>
            <Button
              variant="outlined"
              color="warning"
              size="large"
              onClick={() => history.push("/list-products")}
              className="btn"
            >
              Adicionar mais Itens
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CheckoutOrder;
