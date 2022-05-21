import { createContext, ReactNode, useState } from "react";

type CategoryIdProps ={
  categoryId: string;
}
type CategoryProviderProps = {
  children: ReactNode;
}
type CategoryContextProps = {
  categoryId: CategoryIdProps;
  setCategoryId: (categoryId: CategoryIdProps) => void;
}

export const CategoryContext = createContext({} as CategoryContextProps);

export function CategoryProvider({children}: CategoryProviderProps){
  const [categoryId, setCategoryId] = useState<CategoryIdProps | null>(null);
  return(
    <CategoryContext.Provider value={{categoryId, setCategoryId}}>
      {children}
    </CategoryContext.Provider>
  )
}