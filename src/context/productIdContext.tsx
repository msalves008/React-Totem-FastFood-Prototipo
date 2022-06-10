import { ReactNode, createContext, useState } from "react";

type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
};

type ProductContextProps = {
  product: Product;
  setProduct: (terminal: Product) => void;
}

type ProductProviderProps = {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProductProviderProps) {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}