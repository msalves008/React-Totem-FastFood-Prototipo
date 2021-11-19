import React,{ createContext, ReactNode, useState } from "react";

interface Product{
  productId: string;
}
interface ProductIdProviderProps{
  children: ReactNode;
}
type ProductContextType = {
  productId: Product | null;
  setProductId: React.Dispatch<React.SetStateAction<Product | null>>;
}
export const ProductIdContext = createContext<ProductContextType | null>({} as ProductContextType);

export default function ProductIdProvider({children}: ProductIdProviderProps) {

const [ productId, setProductId] = useState<Product | null>(null);
  return <ProductIdContext.Provider value={{productId, setProductId}}>{children}</ProductIdContext.Provider>
  
}

/* export function useProductId(){
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const context = useContext(ProductIdContext);
  const {productId, setProductId}:Product | null = context;
  return {productId, setProductId};
} */