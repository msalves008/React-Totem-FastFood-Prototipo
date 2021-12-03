import React, { createContext, ReactNode, useState } from "react";

interface Product {
  productId: string;
}
interface Cart {
  cartQuantity: number;
}
interface AmountOrder {
  amountOrder: number;
}
interface ProductIdProviderProps {
  children: ReactNode;
}
type ProductContextType = {
  productId: Product | null;
  setProductId: React.Dispatch<React.SetStateAction<Product | null>>;

  cartQuantity: Cart | null;
  setCartQuantity: React.Dispatch<React.SetStateAction<Cart | null>>;

  amountOrder: AmountOrder | null;
  setAmountOrder: React.Dispatch<React.SetStateAction<AmountOrder | null>>;
};
export const ProductIdContext = createContext<ProductContextType | null>(
  {} as ProductContextType
);

export default function ProductIdProvider({
  children,
}: ProductIdProviderProps) {
  const [productId, setProductId] = useState<Product | null>(null);
  const [cartQuantity, setCartQuantity] = useState<Cart | null>(null);
  const [amountOrder, setAmountOrder] = useState<AmountOrder | null>(null);
  return (
    <ProductIdContext.Provider
      value={{
        productId,
        setProductId,
        cartQuantity,
        setCartQuantity,
        amountOrder,
        setAmountOrder,
      }}
    >
      {children}
    </ProductIdContext.Provider>
  );
}
