import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import cartIcon from "../assets/cart.svg";
import { useHistory } from "react-router-dom";
import { useCart } from "../context/useProductIdContext";

export default function CheckoutSession() {
  const history = useHistory();
  const [cartQuantity, setCartQuantity] = useState(0);
  const [totalItems, setTotalItems] = useState<number>();
  const { cart } = useCart();
  useEffect(() => {
    if (cart) {
      let quantity = 0;
      let total = 0.01;
      for (var i = 0; i < cart.length; i++) {
        quantity += cart[i].amount;
      }
      setCartQuantity(quantity);
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
    <div className="bottom-base-products">
      <div className="bar-options">
        <div className="value">
          <h1>TOTAL</h1>
          <div>
            <span>R$</span>
            <h1>{totalItems}</h1>
          </div>
        </div>
        <div className="cart">
          <button>
            <img src={cartIcon} alt="Carinho de Compras" />
            <span>{cartQuantity}</span>
          </button>
        </div>
      </div>
      <div className="section-buttons-base">
        <Button variant="outlined" color="error" onClick={cancelOrder}>
          CANCELAR
        </Button>
        <Button variant="contained" color="success" onClick={finshOrder}>
          FINALIZAR
        </Button>
      </div>
    </div>
  );
}
