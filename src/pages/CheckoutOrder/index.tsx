import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import { useCart } from "../../context/useProductIdContext";
import TopBarCheckoutSession from "../../components/TopBarCheckout";
import { Button, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { QuantitySelectorButton } from "../../components/QuantitySelectorButton";

const CheckoutOrder: React.FC = () => {
  const { cart, updateProductAmount, removeProduct } = useCart();
  const history = useHistory();
  const [orderTotalValue, setOrderTotalValue] = useState(0);

  useEffect(() => {
    handleVerifyValuesAmount();
  }, []);
  useEffect(() => {
    handleVerifyValuesAmount();
    handleOrderTotalValue();
  }, [cart]);

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
  function checkoutOrder() {
    history.push("/identification");
  }
  if (!cart) {
    return <></>;
  }

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
              <div className="leftItems">
                <IconButton
                  aria-label="delete"
                  style={{ marginLeft: "20px", color: "red" }}
                  onClick={() => removeProduct(row.id)}
                >
                  <Delete />
                </IconButton>
                <img
                  src={row.image}
                  alt="Nike Paul George 2 Masculino"
                  className="Item-image"
                />
              </div>
              <div className="item-info">
                <h3>{row.name}</h3>
                <span> QTD: {row.amount}</span>
              </div>
              <div className="right-items">
                <QuantitySelectorButton
                  productQuantity={row.amount}
                  productId={row.id}
                />
                <div className="product-values">
                  <span className="item-unitary-value">R$ {row.price}</span>
                  <span className="item-amount-value">
                    R$ {(row.price * row.amount).toFixed(2)}
                  </span>
                </div>
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
              <span>R$: {orderTotalValue.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="resume-item">
              <span>Descontos</span>
              <span>R$: 00,00</span>
            </div>
            <div className="divider"></div>
            <div className="amount">
              <span>Total</span>
              <span> R$: {orderTotalValue.toFixed(2).replace(".", ",")}</span>
            </div>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={checkoutOrder}
              className="btn-checkout"
              disabled={orderTotalValue === 0}
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
