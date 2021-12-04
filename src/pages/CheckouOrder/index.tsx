import React from "react";
import TopBar from "../../components/TopBar";
import { Container } from "./styles";

import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
function createData(
  id: number,
  qtd: number,
  product: String,
  unitValue: number,
  totalValue: number
) {
  return { id, qtd, product, unitValue, totalValue };
}
function createDataAdditional(
  item: number,
  product: String,
  unitValue: number,
  totalValue: number
) {
  return { item, product, unitValue, totalValue };
}

const rows = [
  createData(1, 2, "TRIPLO-BACON", 15.9, 21.8),
  createData(2, 1, "BACON SIMPLES", 15.9, 15.9),
  createData(3, 2, "COCA-COLA M", 7.9, 15.8),
  createData(4, 1, "FANTA LARANJA P", 6.9, 6.8),
];

const rowsAdditionals = [
  createDataAdditional(1, "BACON", 2.99, 2.99),
  createDataAdditional(1, "BACON", 2.99, 2.99),
  createDataAdditional(1, "BACON", 2.99, 2.99),
  createDataAdditional(1, "BACON", 2.99, 2.99),
];

const CheckouOrder: React.FC = () => {
  const history = useHistory();
  function checkoutOrder() {
    history.push("/pixpayment");
  }

  function showAlert() {
    return window.alert("Não Existe cupons disponíveis para este produto");
  }
  return (
    <Container>
      <div className="topBar">
        <TopBar />
      </div>
      <div className="Content">
        <h1>CONFIRME SEU PEDIDO</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>QTD</th>
            <th>PRODUTO</th>
            <th>VL. UNIT</th>
            <th>VL. TOTAL</th>
          </tr>

          {rows.map((row) => (
            <tr>
              <td> {row.id}</td>
              <td> {row.qtd}</td>
              <td>{row.product}</td>
              <td>{row.unitValue}</td>
              <td>{row.totalValue}</td>
            </tr>
          ))}
        </table>

        <h1>ADICIONAIS</h1>

        <table>
          <tr>
            <th>ITEM</th>
            <th>PRODUTO</th>
            <th>VL. UNIT</th>
            <th>VL. TOTAL</th>
          </tr>

          {rowsAdditionals.map((row) => (
            <tr>
              <td> {row.item}</td>
              <td>{row.product}</td>
              <td>{row.unitValue}</td>
              <td>{row.totalValue}</td>
            </tr>
          ))}
        </table>
        <h1>TOTAL</h1>
        <div className="amountOrder">
          <div className="item">
            <h5>
              TOTAL
              GERAL..............................................................................
            </h5>
            <h5>R$: {sessionStorage.getItem("amountOrder")}</h5>
          </div>
          <div className="item">
            <h5>
              TOTAL
              DESCONTOS.....................................................................
            </h5>
            <h5>R$: 00,00</h5>
          </div>
          <div className="item">
            <h5 className="colorRed">
              TOTAL A
              PAGAR...........................................................................
            </h5>
            <h5 className="colorRed">
              R$: {sessionStorage.getItem("amountOrder")}
            </h5>
          </div>
        </div>

        <div className="btnGrops">
          <Button
            variant="outlined"
            color="warning"
            size="large"
            onClick={showAlert}
          >
            ADICIONAR CUPOM DE DESCONTO
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={checkoutOrder}
            className="btnCheckout"
          >
            CONFIRMAR
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CheckouOrder;
