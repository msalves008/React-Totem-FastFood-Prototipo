import { useQuery } from "react-query";
import { api } from "../services/api";

interface Products {
  Products: Array<Product>;
}
interface Product {
  Products?: string;
  id: string;
  name: string;
  description?: string;
  price: number;
  situation?: boolean;
  image: string;
}

export async function getProducts(categoryId: string): Promise<Products> {
  const { data } = await api.get(
    `/product/${process.env.REACT_APP_RESTAURANT_ID}/${categoryId}`
  );
  return data;
} 

export function useRequestProductsList(categoryId: string) {
  return useQuery(
    `products-${categoryId}`,
    async () => getProducts(categoryId),
    {
      staleTime: 1000 * 60 * 15, // 15 minutes
    }
  );
}
