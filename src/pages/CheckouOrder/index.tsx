import React from "react";
import TopBar from "../../components/TopBar";
import { Container } from "./styles";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  AlertTitle,
  Stack,
} from "@material-ui/core";

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
  createData(2, 1, " BACON SIMPLES", 15.9, 15.9),
  createData(3, 2, "COCA-COLA M", 7.9, 15.8),
  createData(4, 1, " FANTA LARANJA P", 6.9, 6.8),
];

const rowsAdditionals = [createDataAdditional(1, "BACON", 2.99, 2.99)];

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>QTD</TableCell>
                <TableCell>PRODUTO</TableCell>
                <TableCell>VL. UNIT</TableCell>
                <TableCell>VL. TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.qtd}</TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell>{row.unitValue}</TableCell>
                  <TableCell>{row.totalValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h1>ADICIONAIS</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ITEM</TableCell>
                <TableCell>PRODUTO</TableCell>
                <TableCell>VL. UNIT</TableCell>
                <TableCell>VL. TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsAdditionals.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.item}
                  </TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell>{row.unitValue}</TableCell>
                  <TableCell>{row.totalValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h1>TOTAL</h1>
        <div className="amountOrder">
          <div className="item">
            <h5>
              TOTAL
              GERAL.............................................................................
            </h5>
            <h5>R$: 60,30</h5>{" "}
          </div>
          <div className="item">
            <h5>
            TOTAL
        DESCONTOS.....................................................................
            </h5>
            <h5>R$: 60,30</h5>{" "}
          </div>
          <div className="item">
            <h5>
              TOTAL
              GERAL.............................................................................
            </h5>
            <h5>R$: 60,30</h5>{" "}
          </div>
        </div>
        
        <div className="btnGrops">
          <Button
            variant="outlined"
            color="info"
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
          >
            CONFIRMAR
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CheckouOrder;
