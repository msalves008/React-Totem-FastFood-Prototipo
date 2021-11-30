import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Container } from "./styles";

const CheckouOrder: React.FC = () => {
  const rows = [
    {
      id: 2,
      QTD: 2,
      Produto: "TRIPLO-BACON",
      vl_Unit: 15.9,
      vl_Total: 31.8,
    },
    {
      id: 2,
      QTD: 1,
      Produto: "BACON SIMPLES",
      vl_Unit: 12.9,
      vl_Total: 12.9,
    },
    {
      id: 3,
      QTD: 1,
      Produto: "COCA-COLA M",
      vl_Unit: 7.9,
      vl_Total: 7.9,
    },
    {
      id: 4,
      QTD: 1,
      Produto: "FANTA LARANJA P",
      vl_Unit: 6.9,
      vl_Total: 6.9,
    },
  ];

  return (
    <Container>
      <div className="Content">
        <h1>CONFIRME SEU PEDIDO</h1>
        {/*        <div className="Table_Checkout_Product">
            <strong>QTD</strong>
            <strong>PRODUTO</strong>
            <strong>VL. UNIT</strong>
            <strong>VL. TOTAL</strong>
          </div> */}
        <div style={{ height: 500, width: "98%" }}>
          <DataGrid
            columns={[
              {
                field: "id",
                flex: 1,
                minWidth: 150,
              },
              {
                field: "QTD",
                flex: 1,
                minWidth: 150,
              },
              {
                field: "Produto",
                width: 200,
              },
              {
                field: "vl_Unit",
                flex: 0.3,
                minWidth: 50,
              },
              {
                field: "vl_Total",
                flex: 0.3,
                minWidth: 50,
              },
            ]}
            rows={rows}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckouOrder;
