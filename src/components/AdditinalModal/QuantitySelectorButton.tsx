import React from "react";
import { useCart } from "../../context/useProductIdContext";
import { Container } from "../QuantitySelectorButton/styles";
type IProps = {
  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
};
export function QuantitySelectorButton({
  productQuantity,
  setProductQuantity,
}: IProps) {
  return (
    <Container>
      <button
        className="reduce-quantity-products"
        onClick={() => {
          setProductQuantity(productQuantity - 1);
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
          setProductQuantity(productQuantity + 1);
        }}
      >
        +
      </button>
    </Container>
  );
}
