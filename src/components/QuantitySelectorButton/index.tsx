import React from "react";
import { useCart } from "../../context/useProductIdContext";
import { Container } from "./styles";
type IProps = {
  productQuantity: number;
  productId: string;
};
export function QuantitySelectorButton({
  productQuantity,
  productId,
}: IProps) {
  const { updateProductAmount } = useCart();
  return (
    <Container>
      <button
        className="reduce-quantity-products"
        onClick={() => {
          updateProductAmount({
            productId: productId,
            amount: productQuantity - 1,
          });
        }}
        disabled={productQuantity === 1}
      >
        -
      </button>
      <div className="quantity-products">
        <span>{productQuantity}</span>
      </div>
      <button
        className="increase-quantity-products"
        onClick={() => {
          updateProductAmount({
            productId: productId,
            amount: productQuantity + 1,
          });
        }}
      >
        +
      </button>
    </Container>
  );
}
