import { ReactNode, createContext, useState } from "react";

type ProductId = {
  productId: string;
};

type ProductIdContextProps = {
  productId: ProductId;
  setProductId: (terminal: ProductId) => void;
}

type ProductIdProviderProps = {
  children: ReactNode;
}

export const ProductIdContext = createContext({} as ProductIdContextProps);

export function ProductIdProvider({ children }: ProductIdProviderProps) {
  const [productId, setProductId] = useState<ProductId | null>(null);

  return (
    <ProductIdContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductIdContext.Provider>
  );
}