import React, { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface CartContextData {
  cart: Product[];
  addProduct: (productId: string, amountData: number) => Promise<void>;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}
interface Product {
  id: string;
  name?: string;
  price?: number;
  image?: string;
  amount?: number;
}

interface UpdateProductAmount {
  productId: string;
  amount: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps){
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = sessionStorage.getItem("@CleanSystem:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: string, amountData: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + amountData; ;
     /*  const amount = amountData > 0 ? amountData : amounta; */
      console.log(amount);
      

      if (productExists) {
        productExists.amount = amount ;
      } else {
        const product = await api.get(`/product/${productId}`);

        const newProduct = {
          ...product.data,
          amount: amountData,
        };
        updatedCart.push(newProduct);
      }
      setCart(updatedCart);
      sessionStorage.setItem("@CleanSystem:cart", JSON.stringify(updatedCart));
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: string) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );
      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        sessionStorage.setItem("@CleanSystem:cart", JSON.stringify(updatedCart));
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({productId, amount }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        (product) => product.id === productId
      );
      if (productExists) {
        productExists.amount = amount;
        setCart(updatedCart);
        sessionStorage.setItem("@CleanSystem:cart", JSON.stringify(updatedCart));
        
      } else {
        throw Error();
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}
