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
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalItems, setTotalItems] = useState<number>();
  const { cart } = useCart();
  useEffect(() => {
    if (cart) {
      let quantity = 0;
      let total = 0;
      for (var i = 0; i < cart.length; i++) {
        quantity += cart[i].amount;
      }
      setCartQuantity(quantity);
      cart.map((product) => {
        total += product.price * product.amount;
      });
      setTotalItems(total);

      sessionStorage.setItem("amountOrder", JSON.stringify(total));
    }
  }, [cart]);
  function finshOrder() {
    history.push("/checkout-order");
  }
  function cancelOrder() {
    history.push("/");
  }

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
                onClick={finshOrder}
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
