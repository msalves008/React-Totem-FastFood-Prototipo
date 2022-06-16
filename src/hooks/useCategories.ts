import { useQuery } from "react-query";
import { api } from "../services/api";
interface Categories {
  Categories: Array<Category>;
}
interface Category {
  id: string;
  name: string;
  image: string;
}

async function getCategories(): Promise<Categories> {
  const { data } = await api.get(
    `/category/${process.env.REACT_APP_RESTAURANT_ID}`
  );
  console.log(data);
  return data;
}

export function useCategory() {
  return useQuery(
    `categories`,
    async () => getCategories(),
    {
      staleTime: 1000 * 60 * 15, // 15 minutes
    }
  );
}
