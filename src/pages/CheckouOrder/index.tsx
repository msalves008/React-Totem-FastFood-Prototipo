import React from "react";
import TopBar from "../../components/TopBar";
import { Container } from "./styles";

import {Table} from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {TableContainer} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import {Paper} from '@material-ui/core';
function createData(
  id: number,
  qtd: number,
  product: String,
  unitValue: number,
  totalValue: number,
) {
  return { id,qtd, product, unitValue, totalValue };
}

const rows = [
  createData(1,2,'TRIPLO-BACON', 15.90, 21.80 ),
  createData(2,1,' BACON SIMPLES', 15.90, 15.90 ),
  createData(3,2,'COCA-COLA M', 7.90, 15.80 ),
  createData(4,1,' FANTA LARANJA P', 6.90, 6.80 ),
];
const CheckouOrder: React.FC = () => {


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
            <TableCell >PRODUTO</TableCell>
            <TableCell >VL. UNIT</TableCell>
            <TableCell >VL. TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.qtd}</TableCell>
              <TableCell align="left">{row.product}</TableCell>
              <TableCell >{row.unitValue}</TableCell>
              <TableCell >{row.totalValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




      </div>
    </Container>
  );
};

export default CheckouOrder;
