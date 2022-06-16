import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { useRequest } from "../../hooks/useRequest";
import { CategoryContext } from "../../context/categoryIdContext";
import { useCategory } from "../../hooks/useCategories";
import { queryClient } from "../../services/queryClient";
import { getProducts } from "../../hooks/useRequestProductsList";

interface NavBarType {
  id: string;
  name: string;
  image: string;
}
export function NavBar() {
  const categoryContext = useContext(CategoryContext);

  useEffect(() => {
    categoryContext.setCategoryId({
      categoryId: process.env.REACT_APP_INITIAL_CATEGORY,
    });
  }, []);

  const { data, isLoading } = useCategory();

  if (isLoading) {
    return <></>;
  }
  if (data) {
    handleGetAllProducts();
  }

  async function handleGetAllProducts() {
    for (let i = 0; i < data.Categories.length; i++) {
        await queryClient.prefetchQuery(
          `products-${data.Categories[i].id}`,
          async () => getProducts(data.Categories[i].id),
          {
            staleTime: 1000 * 60 * 15, // 15 minutes
          }
        );
    }
  }
  return (
    <Container>
      <div className="main-navbar">
        {data.Categories.map((d) => (
          <button
            key={d.id}
            className={
              categoryContext?.categoryId?.categoryId === d.id
                ? " base-navbar active"
                : "base-navbar"
            }
            onClick={() => {
              categoryContext.setCategoryId({
                categoryId: d.id,
              });
            }}
          >
            <img src={d.image} alt="" className="icon" />
          </button>
        ))}
      </div>
    </Container>
  );
}
