import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useCart } from "../../context/useProductIdContext";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import { Container } from "./styles";
type IProps = {
  showTotalValue: boolean;
};
export default function TopBarCheckoutSession({ showTotalValue }: IProps) {
  const history = useHistory();
  const [totalItems, setTotalItems] = useState<number>();
  const { cart } = useCart();
  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.map((product) => {
        total += product.price * product.amount;
      });
      setTotalItems(total);
    }
  }, [cart]);

  return (
    <Container>
      <div>
        <img src={logo} alt="" className="logo" />
        <section>
          {showTotalValue && (
            <>
              <div className="totalValue">
                <h1>TOTAL: </h1>
                <h1 className="amount">
                  R$ {Number(totalItems).toFixed(2).replace(".", ",")}
                </h1>
              </div>
              <Button
                variant="outlined"
                size="large"
                color="warning"
                startIcon={<ShoppingCart />}
                onClick={() => history.push("/checkout-order")}
                disabled={
                  Number(totalItems).toFixed(2).replace(".", ",") === "0,00"
                }
              >
                Finalizar pedido
              </Button>
            </>
          )}
        </section>
      </div>
    </Container>
  );
}
